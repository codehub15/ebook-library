const express = require("express")
const httpError = require("http-errors")
const mongoose = require("mongoose")
const env = require("./config/config")
const { setCors } = require("./middleware/security")
const cookieParser = require("cookie-parser")
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const path = require("path")

// import all routes
const indexRoute = require("./routes/indexRoute")
const bookRoute = require("./routes/bookRoute")
const userRoute = require("./routes/userRoute")

// create express-server
const app = express()

// connect to mongoDB
mongoose.connect(env.db, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on("error", (err) => console.log(err))
mongoose.connection.on("open", () => console.log("database connected"))

// session
app.use(session({
    secret: 'secret keyboard',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { secure: false, httpOnly: false }
}))

// middleware
app.use(express.json())
app.use(setCors)
app.use(cookieParser())
app.use(express.static("../client/build"))

// use routes
app.use("/", indexRoute)
app.use("/books", bookRoute)
app.use("/users", userRoute)

// universal errors handler ---------------------------
app.use((req, res, next) => {
    next(httpError(404))
})
// catch error
app.use((err, req, res, next) => {
    res.json({ status: err.status, err: err.message })
})

// server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})
