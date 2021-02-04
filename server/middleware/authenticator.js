const User = require("../models/userSchema")
const httpError = require("http-errors")

const auth = async (req, res, next) => {
    const token = req.header("x-auth")
    console.log("auth token:", token)
    try {
        const user = await User.findByToken(token)
        // console.log(user)
        if (!user) throw httpError(403)
        req.user = user
        req.token = token
        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports = auth;