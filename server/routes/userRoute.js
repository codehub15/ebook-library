const Route = require("express").Router()
const { getUsers, getUser, postUser, putUser, deleteUser, login, logout } = require("../controllers/usersController")
const { validateInputs } = require("../middleware/validator")
const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuth")

Route.get("/", auth, isAdmin, getUsers)
Route.get("/:id", auth, getUser)
Route.post("/", validateInputs(), postUser)
Route.put("/:id", auth, putUser)
Route.delete("/:id", auth, deleteUser)
Route.post("/login", login)
Route.get("/logout", logout)

module.exports = Route