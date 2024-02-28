const DoctoerModel = require('../models/Doctorschem');

const temCotroller = async (req, res) => {
    try {
        res.status(200).send("This is from controller and my name is vedang");
    } catch (err) {
        console.log(err);
    }
}
const Registrationdoctor = async (req, res) => {
    try {

        let { firstname, middelname, lastname, registrationnumber, yearofregistration, statemedicalcouncil, addressofhospital, password, cpassword, phonenumber, degree } = req.body;
        const existUser = await DoctoerModel.findOne({ registrationnumber });

        if (existUser) {
            return res.status(409).send({ result: false, message: "User already exists" });
        }

        if (password != cpassword) {
            return res.status(401).send({ result: false, message: "Passwords do not match. Please try again." });
        }

        const newDoctoruser = await DoctoerModel.create({ fullname: { firstname, middelname, lastname }, registrationnumber, yearofregistration, statemedicalcouncil, addressofhospital, password, cpassword, phonenumber, degrees: [...degree] });

        newDoctoruser.save();
        res.status(200).send({ result: true, message: "User is registered sucessfully" });

    } catch (e) {
        console.log(e);
        next({ status: 400, message: "Registration unsuccessful saver side error" });
    }
}
module.exports = { temCotroller, Registrationdoctor };