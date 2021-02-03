const httpError = require("http-errors")
const User = require("../models/userSchema")

// get all users
exports.getUsers = async (req, res, next) => {
    try {
        // const users = await User.find().populate("books", "-__v, -sourceLink, -quantity, -isBorrow")
        const users = await User.find()
        res.json({ success: true, users: users })
    }
    catch (err) {
        next(err)
    }
}

// get single user
exports.getUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await User.findById(id).populate("books", "-__v, -sourceLink,")
        if (!user) throw httpError(404)
        res.cookie("login", true)
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
}

// add new user
exports.postUser = async (req, res, next) => {
    try {
        const user = new User(req.body)
        console.log("signup:", user)
        const token = user.generateAuthToken()
        await user.save()
        const data = user.getPublicFields()
        // setup session
        req.session.token = token
        // req.session.user = user
        req.session.user = data
        res.cookie("login", true)
        res.json({ success: true, user: data, token: token })
        // res.header("x-auth", token).json({ success: true, user: data})
        // res.cookie("x-auth", token, { secure: true }).json({ success: true, user: data })
    }
    catch (err) {
        next(err)
    }
}


// update an user
exports.putUser = async (req, res, next) => {
    const { id } = req.params
    const user = req.body
    try {
        const updateUser = await User.findByIdAndUpdate(id, user, { new: true })
        if (!updateUser) throw httpError(500)
        res.json({ success: true, user: updateUser })
    }
    catch (err) {
        next(err)
    }
}

// delete a user
exports.deleteUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) throw httpError(500)
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
}


// login
exports.login = async (req, res, next) => {
    const { email, password } = req.body
    console.log("login:", req.body)
    try {
        const user = await User.findOne({ email })
        const valid = await user.checkPassword(password)
        if (!valid) throw httpError(403)
        let token = user.generateAuthToken()
        console.log("token:", token)
        const data = user.getPublicFields()
        req.session.token = token
        req.session.user = data
        res.cookie("login", true)
        res.json({ success: true, user: data, token: token })
        // res.header("x-auth", token).json({ success: true, user: data })
        // res.json({ success: true, user: data, token: token })
        // res.cookie("x-auth", token).json({ success: true, user: data })
    }
    catch (err) {
        next(err)
    }
}

exports.logout = async (req, res, next) => {
    try {
        req.session.destroy()
        res.json({ success: true })
    } catch (err) {
        next(err)
    }
}
