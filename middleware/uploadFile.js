const multer = require('multer')
const uploadFile = multer({
    limites: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx|pdf|hwp)/)){
            return cb( new Error('Upload only doc, docx, pdf, hwp'))
        }
        cb (undefined, true)
    }
})

module.exports = uploadFile