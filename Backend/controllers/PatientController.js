
const PatientModel = require('../models/PatientSchema');
const CompnaeringPassword = require('../utils/ComparingPassword');
const { gfsPromise } = require('../models/UploadingFiles');
const archiver = require('archiver');

const registrationpatient = async (req, res) => {
    try {

        let { firstname, middelname, lastname, aadharcardnumber, password, cpassword, phonenumber, email } = req.body;


        let userPresent = await PatientModel.findOne({ email, aadharcardnumber });

        if (userPresent) {
            return res.status(409).send({ result: false, message: "User already exists" });
        }

        if (password != cpassword) {
            return res.status(401).send({ result: false, message: "Passwords do not match. Please try again." });

        }

        let newuser = await PatientModel.create({ fullname: { firstname, middelname, lastname }, aadharcardnumber, password, phonenumber, email });

        newuser.save();
        const token = await newuser.generateWebTocken();
        console.log(token);
        res.status(200).send({ result: true, message: "User is registered sucessfully", token });

    } catch (e) {
        console.log(e);
        next({ status: 500, message: "Registration unsuccessful saver side error" });
    }
}

const loginOfPatient = async (req, res) => {
    try {
        const { aadharcardnumber, password } = req.body;
        const user = await PatientModel.findOne({ aadharcardnumber });
        if (!user) {
            return res.status(404).send({ result: false, message: "User not exists" })
        }
        const isMatch = await CompnaeringPassword(password, user.password);
        if (!isMatch) {
            return res.status(404).send({ result: false, message: "Enter correct cerditilas" });
        }

        const token = await user.generateWebTocken();

        res.status(200).send({ result: true, message: "Login sucessfully", token });


    } catch (e) {
        console.log(e);
        next({
            status: 400,
            message: "Login unsuccessful server side error",
        })
    }
}

const getAllPdfForPerson = async (req, res) => {
    try {
        const { aadharcardnumber } = req.body;

        const userPrasent = await PatientModel.findOne({ aadharcardnumber });

        if (!userPrasent) {
            return res.status(406).send({ result: false, message: "User does not found" });
        }

        const pdfFilesForUser = userPrasent.pdfdocumnetslist;

        const pdfFilenames = pdfFilesForUser.map(doc => doc.filename);

        const gfs = await gfsPromise;

        const files = await gfs.find({ filename: { $in: pdfFilenames } }).toArray();

        if (files.length <= 0) {
            return res.status(404).send({ result: false, messgae: "There are no file in the database" });
        }

        const archive = archiver("zip", {
            zlib: { level: 9 }
        });

        archive.pipe(res);

        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename="all_pdfs.zip"');

        files.forEach(file => {
            const downloadStream = gfs.openDownloadStream(file._id);
            archive.append(downloadStream, { name: file.filename })
        });

        archive.finalize();

        archive.on('end', () => {
            console.log('All files have been streamed');

        });

        archive.on('close', () => {
            console.log('Archive has been finalized');

            // res.status(200).send({ message: "All files have been sent in zip" });
        });








    } catch (e) {
        console.log(e);

        next({ status: 500, message: "serevr side error" });
    }
}

module.exports = { registrationpatient, loginOfPatient, getAllPdfForPerson };