const multer = require('multer')

const uploadFields = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx|pdf|hwp|jpg|jpeg|png)/)){
            return cb( new Error ('Not acceptable file format'))
        }
        cb (undefined, true)
    }
})

module.exports = uploadFields