const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})
// CLOUDINARY_KEY=568747287494749
// CLOUDINARY_SECRET=YulDiuKrh5SGdtatI5NppfGE2VM
// CLOUDINARY_NAME=dfhcho5xi
var storage = new CloudinaryStorage({
    cloudinary
})

const uploadCloud = multer({ storage });

module.exports = uploadCloud