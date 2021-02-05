import React, { useEffect, useState, useContext } from 'react'
import { withRouter } from "react-router";
import { Redirect, Link } from "react-router-dom"
// import Book from '../components/Book'
import BookRead from '../components/BookRead'
import { AuthContext } from "../context/AuthContext"
import '../style/book.scss'
import defaultBookCover from '../assets/default-cover-book.png'


function Ebooks() {
    const { isAuth, books, setBooks } = useContext(AuthContext)
    // const [books, setBooks] = useState([])
    console.log("before E----book:", books)

    useEffect(() => {
        fetch("http://localhost:5000/books")
            .then(res => res.json())
            .then(data => {
                setBooks(data.books)
            })
    }, [])

    console.log("after E----book:", books)

    return (
        <div className="book-container">
            {/* {isAuth ? ( */}
            <div className="book-list">
                {books && books.map((book) => {
                    // setBooks(book)
                    // console.log("Map books:", books)
                    return (
                        <div key={book._id} className="book">
                            <h3>{book.title}</h3>
                            <div className="img-div">
                                <img src={book.cover ? book.cover : defaultBookCover}
                                    alt="Book cover"
                                    width="155" height="250" />
                            </div>
                            <p>{book.description}</p>
                            <p>{book.author}</p>
                            <p>{book.year}</p>
                            {/* <button className="btn-read-book" onClick={(id) => readBook(id)}>
                                open to read */}
                            {/* <a href={`client/public/files/${book.bookFileName}.pdf`} target="_blank">read</a> */}
                            {/* </button> */}

                            <Link to={{
                                pathname: `/read-book/${book._id}`,
                                state: {
                                    bookpath: book.bookFileName
                                }
                            }}
                                className="btn-read-book"
                            >book</Link>
                            {/* <Link to={`/read-book/${book._id}`} state={{ book: book }}>book</Link> */}
                            {/* <Link to={`/read-book/${book._id}`, book = "hello"} className="btn-read-book">open to read</Link> */}
                        </div>
                    )
                })
                }
            </div>
            {/* : <Redirect to="/login" />} */}
        </div >
    )
}

export default withRouter(Ebooks)