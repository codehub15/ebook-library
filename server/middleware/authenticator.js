const User = require("../models/userSchema")
const httpError = require("http-errors")

const auth = async (req, res, next) => {
    const token = req.header("x-auth")
    try {
        const user = await User.findByToken(token)
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