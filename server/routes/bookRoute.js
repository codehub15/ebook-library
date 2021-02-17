const Route = require("express").Router()
const { getBooks, getBook, postBook, putBook, deleteBook, postBookPath } = require("../controllers/booksController")
const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuth")
const fileUpload = require("../middleware/fileUpload")
// const fileDelete = require("../middleware/deleteFile")

Route.get("/", getBooks)
Route.get("/:id", auth, getBook)
Route.post("/", auth, isAdmin, fileUpload, postBook)
Route.put("/:id/:filename", auth, isAdmin, putBook)
Route.delete("/:id/:filename", auth, isAdmin, deleteBook)

module.exports = Route
