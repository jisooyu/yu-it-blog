const multer = require('multer')
const uploadImage = multer({
    limites: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)/)){
            return cb( new Error('Upload only jpg, jpeg, png'))
        }
        cb (undefined, true)
    }
})

module.exports = uploadImage