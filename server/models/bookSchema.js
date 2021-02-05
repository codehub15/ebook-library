const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    author: { type: String, required: false },
    path: { type: String, required: false },
    // originName: { type: String },
    // uploadName: { type: String },
    bookFileName: { type: String },
    cover: { type: String, required: false },
    year: { type: Number, required: false },
})

module.exports = mongoose.model("Book", BookSchema)
