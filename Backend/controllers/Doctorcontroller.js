const DoctoerModel = require('../models/Doctorschem');

const temCotroller = async (req, res) => {
    try {
        res.status(200).send("This is from controller and my name is vedang");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { temCotroller };