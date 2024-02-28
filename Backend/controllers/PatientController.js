
const PatientModel = require('../models/PatientSchema');


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

module.exports = { registrationpatient };