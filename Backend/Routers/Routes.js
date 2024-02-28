const expres = require('express');
const router = expres.Router();
const { temCotroller, Registrationdoctor } = require('../controllers/DockterController');
const { registrationpatient } = require('../controllers/PatientController');
const Validate = require('../middlewares/Validate-middleware');
const VerificationRegisterrationschema = require('../validator/PatientRegsitartionValidator');

router.get("/", temCotroller);
router.post("/pregister", Validate(VerificationRegisterrationschema), registrationpatient);
router.post("/dregister", Registrationdoctor);
module.exports = router;