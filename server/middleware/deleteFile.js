const fs = require("fs")

const deleteLocalFile = fs.stat('./uploads/files/' + filename, function (err, stats) {
    console.log(stats) // get all information of file in stats variable
    if (err) {
        return console.error(err)
    }

    fs.unlink('./uploads/files/' + filename, function (err) {
        if (err) return console.log(err)
        console.log('file deleted successfully')
    });
});

module.exports = deleteLocalFile
