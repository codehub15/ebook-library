const path = require("path")

exports.indexController = (req, res, next) => {
    // res.send("received get request")
    res.sendFile(path.join(__dirname + '../../../client/build/index.html'))
    // res.sendFile(path.resolve(__dirname, "../../client", "build", "index.html"))
}
