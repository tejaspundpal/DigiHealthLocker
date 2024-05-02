
const PatientModel = require('../models/PatientSchema');
const CompnaeringPassword = require('../utils/ComparingPassword');


const registrationpatient = async (req, res) => {
    try {

        let { firstname, middelname, lastname, aadharcardnumber, password, cpassword, phonenumber } = req.body;


        let userPresent = await PatientModel.findOne({ aadharcardnumber });

        if (userPresent) {
            return res.status(409).send({ result: false, message: "User already exists" });
        }

        if (password != cpassword) {
            return res.status(401).send({ result: false, message: "Passwords do not match. Please try again." });

        }

        let newuser = await PatientModel.create({ fullname: { firstname, middelname, lastname }, aadharcardnumber, password, phonenumber });

        newuser.save();
        const token = await newuser.generateWebTocken();
        console.log(token);
        res.status(200).send({ result: true, message: "User is registered sucessfully" });

    } catch (e) {
        console.log(e);
        next({ status: 400, message: "Registration unsuccessful saver side error" });
    }
}

const loginOfPatient = async (req, res) => {
    try {
        const { aadharcardnumber, password } = req.body;
        const user = await PatientModel.findOne({ aadharcardnumber });
        if (!user) {
            return res.staus(404).send({ result: false, message: "User not exists" })
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

module.exports = { registrationpatient, loginOfPatient };