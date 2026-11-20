const multer = require("multer")
const st = multer.diskStorage({
    destination:((req,file,cb)=>{
        cb(null,"upload/")
    }),
    filename:((req,file,cb)=>{
      cb(null,file.originalname)
    })
})
const upload = multer({
    storage : st
}
)
module.exports = upload