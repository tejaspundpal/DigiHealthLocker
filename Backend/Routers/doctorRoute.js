const expres = require('express');
const router = expres.Router();
const { temCotroller } = require('../controllers/Doctorcontroller');

router.get("/", temCotroller);

module.exports = router;