const { body, validationResult } = require('express-validator')

exports.validateInputs = () => {
    return [
        body("userName")
            .notEmpty()
            .exists()
            .trim()
            .escape()
            .withMessage("Please give your name"),

        body("email")
            .isEmail()
            .normalizeEmail()
            .withMessage("invalid email"),

        body("password")
            .isLength({ min: 5 })
            .withMessage("password is too short"),

        (req, res, next) => {
            let errors = validationResult(req)
            if (!errors.isEmpty()) {
                console.log(errors)
                let err = errors.errors.map(er => ({ [er.param]: er.msg }))
                return res.json({ status: 203, message: err })
            }
            next()
        }
    ]
}
