const DoctoerModel = require('../models/Doctorschem');
const CompnaeringPassword = require('../utils/ComparingPassword');
const DoctorValidationWithWebsite = require('../utils/DoctorValidationWithWebsite');
const PatientModel = require('../models/PatientSchema');

const temCotroller = async (req, res) => {
    try {

        res.status(200).send({ message: "This is from controller and my name is vedang", user: req.user });
    } catch (err) {
        console.log(err);
    }
}
const Registrationdoctor = async (req, res) => {
    try {

        let { firstname, middelname, lastname, registrationnumber, yearofregistration, statemedicalcouncil, addressofhospital, password, cpassword, phonenumber } = req.body;
        const existUser = await DoctoerModel.findOne({ registrationnumber });

        if (existUser) {
            return res.status(409).send({ result: false, message: "User already exists" });
        }

        if (password != cpassword) {
            return res.status(401).send({ result: false, message: "Passwords do not match. Please try again." });
        }
        //checking the validation of the doctor with web scraping
        const validateDoctor = await DoctorValidationWithWebsite({ Doctorname: `${firstname.toLowerCase()} ${middelname.toLowerCase()} ${lastname.toLowerCase()}`, RegistrtionNumber: registrationnumber, userYear: yearofregistration, userStateCouncil: statemedicalcouncil });

        if (!validateDoctor) {
            return res.status(401).send({ result: false, message: "Give correct details of registration number with munciple conusile" });

        }

        //Web scraping for the cheking of the doctor
        const newDoctoruser = await DoctoerModel.create({ fullname: { firstname, middelname, lastname }, registrationnumber, yearofregistration, statemedicalcouncil, addressofhospital, password, cpassword, phonenumber, });

        newDoctoruser.save();
        res.status(200).send({ result: true, message: "User is registered sucessfully" });

    } catch (e) {
        console.log(e);
        next({ status: 400, message: "Registration unsuccessful saver side error" });
    }
}

const loginOfDoctor = async (req, res) => {
    try {
        const { registrationnumber, password } = req.body;
        const user = await DoctoerModel.findOne({ registrationnumber });
        if (!user) {
            return res.status(404).send({ result: false, message: "User not exists" })
        }
        const isMatch = await CompnaeringPassword(password, user.password);
        if (!isMatch) {
            return res.status(404).send({ result: false, message: "Enter correct cerditilas" });
        }

        const token = await user.generateTokenForDoctor();
        // console.log("Token of doctor is ", token);
        res.status(200).send({ result: true, message: "Login sucessfully", token });


    } catch (e) {
        console.log(e);
        next({
            status: 400,
            message: "Login unsuccessful server side error",
        })
    }
}

const uploadingFile = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).send({ result: false, message: "File not found at backend" })
        }
        if (!req.body.aadharcardnumber) {
            return res.status(400).send({ result: false, message: "Aadharcardnumber not found" });

        }

        const userFileUpload = await PatientModel.findOne({ aadharcardnumber: req.body.aadharcardnumber });
        if (!userFileUpload) {
            res.status(404).send({ result: false, message: "User not found with the aadharcard" });
        }
        if (userFileUpload.pdfdocumnetslist.find(fileDetail => fileDetail.orginalname === req.file.originalname)) {
            return res.status(404).send({ result: false, message: "File alredy exist" });
        }
        // console.log(userFileUpload);
        // console.log(req.file.id);
        // console.log(req.file.filename);
        const newListPdfs = userFileUpload.pdfdocumnetslist.concat({
            _id: req.file.id.valueOf(),
            filename: req.file.filename,
            orginalname: req.file.originalname
        });

        // console.log(newListPdfs);

        const changeduser = await PatientModel.findOneAndUpdate({
            aadharcardnumber: req.body.aadharcardnumber
        }, { $set: { pdfdocumnetslist: newListPdfs } });

        // console.log(changeduser);
        if (!changeduser) {
            return res.status(400).send({ result: false, message: "File been added but user is not updated" });
        }

        res.status(200).send({ result: true, message: "File added " });




    } catch (e) {
        console.log(e);
        // next({ status: 500 });
        next({
            status: 400,
            message: "Serevr side error and we can not upload the file",
        })

    }
}

const addAppointment = async (req, res) => {
    try {
        const { } = req.body;


    } catch (e) {
        console.log(e);
        next({
            status: 400,
            message: "Serevr side error and appointment is not added",
        })
    }
}

module.exports = { temCotroller, Registrationdoctor, loginOfDoctor, uploadingFile, addAppointment };