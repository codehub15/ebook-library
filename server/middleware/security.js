exports.setCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    // optional for more security
    res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE", "OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Requested-With, Content-Type, Accept, Authorization, x-auth")

    next()
}
