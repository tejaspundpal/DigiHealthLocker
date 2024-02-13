const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const doctorRouter = require('./Routers/doctorRoute');
const { temCotroller } = require('./controllers/Doctorcontroller');
const db = require('./utils/db');
const dotenv = require("dotenv");
//To make use of the env variables
dotenv.config();
app.use(express.json());
app.use("/doc", temCotroller);


db().then(() => {
    app.listen(port, () => {
        console.log(`Server is started at ${port}`);
    })
})
