const multer = require("multer")

const uploadPath = __dirname + "/../../client/public/files"

const upload = multer({
    dest: uploadPath
})

// const imgFileUpload = upload.single(("file"))
const imgFileUpload = upload.fields([
    { name: "file", maxCount: 1 },
    { name: "cover", maxCount: 1 },
])

module.exports = imgFileUpload
