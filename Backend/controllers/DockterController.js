const DoctoerModel = require('../models/Doctorschem');
const CompnaeringPassword = require('../utils/ComparingPassword');
const DoctorValidationWithWebsite = require('../utils/DoctorValidationWithWebsite');

const temCotroller = async (req, res) => {
    try {
        res.status(200).send("This is from controller and my name is vedang");
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
            return res.staus(404).send({ result: false, message: "User not exists" })
        }
        const isMatch = await CompnaeringPassword(password, user.password);
        if (!isMatch) {
            return res.status(404).send({ result: false, message: "Enter correct cerditilas" });
        }

        const token = await user.generateTokenForDoctor();
        // console.log("Token of doctor is ", token);
        res.status(200).send({ result: true, message: "Login sucessfully" });


    } catch (e) {
        console.log(e);
        next({
            status: 400,
            message: "Login unsuccessful server side error",
        })
    }
}

module.exports = { temCotroller, Registrationdoctor, loginOfDoctor };