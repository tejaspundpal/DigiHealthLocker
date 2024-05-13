const nodemailer = require("nodemailer");

let sendOtpWithMail = async (email, otp) => {
    try {
        console.log("Sending the otp to the mail");
        console.log("The email and otp is", email, otp);
        // console.log(userfirstname, useremail);



        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.in',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        });
        let info = await transporter.sendMail({
            from: '"DigiHealthLocker" <roadster.com@zohomail.in>',
            to: email,
            subject: `Otp from DigiHealthLocker for verification`,
            html: `<p>Your six digit otp is :
            <br>
            ${otp}
           `
        });
        console.log(info);
        return info;
    } catch (err) {
        console.log(err);
        res.status(400).send({
            success: "false",
            message: "SMTP server side error",
        })
    }
}

module.exports = sendOtpWithMail;