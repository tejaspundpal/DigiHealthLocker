const jwt = require("jsonwebtoken");
const PatientModel = require('../models/PatientSchema');



const pauthmiddleware = async (req, res, next) => {
    try {
        let token = req.header('Authorization');

        // console.log(token);
        if (!token) {
            return res.status(401).send({ result: false, message: "Unothrized HTTP token is not provided" });
        }

        token = token.replace("Barere", "").trim();

        const isVerified = await jwt.verify(token, process.env.SECRET_KEY);
        if (!isVerified) {
            return res.status(405).send({ result: false, message: "Token is not valid" });
        }

        const userData = await PatientModel.findOne({ aadharcardnumber: isVerified.aadharcardnumber });

        console.log(userData);
        console.log(registrationNumber);

        req.userData;
        req.token;

        // console.log(userData);



        next();
    } catch (e) {

        console.log(e);

        next({ status: 405, message: "Server side error and authication is falied " });

    }
}

module.exports = pauthmiddleware;