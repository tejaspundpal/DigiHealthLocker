const exprees = require('express');
const mongoose = require('mongoose');

const doctoerSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        maxLength: 10
    },
    adharcard: {
        type: String,
        require: true,
        maxLength: 10
    }
});

const DoctoerModel = mongoose.model("doctor", doctoerSchema);

module.exports = DoctoerModel;
