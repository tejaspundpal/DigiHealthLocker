const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');


const conn = mongoose.createConnection("mongodb://localhost:27017/digihealthlockaer");

let gfs;

conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "uploads"
    });
    // gfs = Grid(conn.db, mongoose.mongo);
    // gfs.collection("uploads");

});

const storage = new GridFsStorage({
    url: "mongodb://localhost:27017/digihealthlockaer",
    file: (req, file) => {

        return { filename: 'Vedang_' + Date.now() + file.originalname, bucketName: 'uploads' };
    }
})

const upload = multer({
    storage, limits: { fileSize: 50 * 1024 * 1024 }
});

module.exports = { gfs, upload };