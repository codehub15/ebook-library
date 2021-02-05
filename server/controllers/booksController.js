const httpError = require("http-errors")
const Book = require("../models/bookSchema")

// get all books
exports.getBooks = async (req, res, next) => {
    try {
        const books = await Book.find()
        res.json({ success: true, books: books })
    }
    catch (err) {
        next(err)
    }
}

// get single book
exports.getBook = async (req, res, next) => {
    const { id } = req.params
    try {
        const book = await Book.findById(id)
        if (!book) throw httpError(404)
        res.json({ success: true, book: book })
    }
    catch (err) {
        next(err)
    }
}

// add a book
exports.postBook = async (req, res, next) => {
    console.log("body:", req.body)
    console.log("file:", req.files)
    console.log("file book:", req.files.file[0])
    console.log("file cover:", req.files.cover[0])

    try {
        const book = new Book({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            path: "/files/" + req.files.file[0].filename,
            // path: req.file.path,
            // originName: req.file.originalname,
            // uploadName: req.file.filename,
            bookFileName: req.files.file[0].filename,
            // cover: "/files/" + req.files.cover[0] ? req.files.cover[0].filename : 'default-cover-book',
            cover: "/files/" + req.files.cover[0].filename,
            year: req.body.year
        })
        console.log("book:", book)
        await book.save()
        res.json({ success: true, book: book })
    }
    catch (err) {
        next(err)
    }
}

// update a book
exports.putBook = async (req, res, next) => {
    const { id } = req.params
    const book = req.body
    try {
        const updateBook = await Book.findByIdAndUpdate(id, book, { new: true })
        if (!book) throw httpError(404)
        res.json({ success: true, book: updateBook })
    }
    catch (err) {
        next(err)
    }
}

// delete a book
exports.deleteBook = async (req, res, next) => {
    const { id } = req.params
    try {
        const book = await Book.findByIdAndDelete(id)
        if (!book) throw httpError(404)
        res.json({ success: true, book: book })
    }
    catch (err) {
        next(err)
    }
}
