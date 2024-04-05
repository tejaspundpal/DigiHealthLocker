const expres = require('express');
const router = expres.Router();
const { temCotroller, Registrationdoctor, loginOfDoctor } = require('../controllers/DockterController');
const { registrationpatient, loginOfPatient } = require('../controllers/PatientController');
const Validate = require('../middlewares/Validate-middleware');
const { VerificationRegisterrationschema, VerificationLoginschemaPatient } = require('../validator/PatientValidatorSchemas');
const { VerificationRegisterrationschemaDoctor, VerificationLoginschemaDoctor } = require('../validator/DoctorValidationSchemas');


router.get("/", temCotroller);
router.post("/pregister", Validate(VerificationRegisterrationschema), registrationpatient);
router.post("/dregister", Validate(VerificationRegisterrationschemaDoctor), Registrationdoctor);
router.post("/plogin", Validate(VerificationLoginschemaPatient), loginOfPatient);
router.post("/dlogin", Validate(VerificationLoginschemaDoctor), loginOfDoctor);
module.exports = router;