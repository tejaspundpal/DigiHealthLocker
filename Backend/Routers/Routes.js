const expres = require('express');
const router = expres.Router();
const { temCotroller, Registrationdoctor, loginOfDoctor, uploadingFile, addAppointment } = require('../controllers/DockterController');
const { registrationpatient, loginOfPatient } = require('../controllers/PatientController');
const Validate = require('../middlewares/Validate-middleware');
const { VerificationRegisterrationschema, VerificationLoginschemaPatient } = require('../validator/PatientValidatorSchemas');
const { VerificationRegisterrationschemaDoctor, VerificationLoginschemaDoctor } = require('../validator/DoctorValidationSchemas');
// const DAuth = require('../middlewares/Dauth');
const { gfs, upload } = require('../models/UploadingFiles');
const sizeLimitation = require('../middlewares/CheckSizeFile');


router.get("/", temCotroller);
router.post("/pregister", Validate(VerificationRegisterrationschema), registrationpatient);
router.post("/dregister", Validate(VerificationRegisterrationschemaDoctor), Registrationdoctor);
router.post("/plogin", Validate(VerificationLoginschemaPatient), loginOfPatient);
router.post("/dlogin", Validate(VerificationLoginschemaDoctor), loginOfDoctor);
// router.get("/user", DAuth, temCotroller)
router.post("/duploadPdf", sizeLimitation, upload.single('file'), uploadingFile);
router.post("/dAddAppointment", addAppointment);
module.exports = router;