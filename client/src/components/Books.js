import React, { useContext } from 'react'
import { withRouter } from "react-router";
import { Link, Redirect } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import defaultBookCover from '../assets/default-cover-book.png'
import '../style/book.scss'


function Ebooks() {
    const { isAuth, books, setBooks } = useContext(AuthContext)

    fetch("/books")
        .then(res => res.json())
        .then(data => {
            setBooks(data.books)
        })

    return (
        <div className="book-container">
            {isAuth ? (
                <div className="book-list">
                    {books && books.map((book) => {
                        return (
                            <div key={book._id} className="book">
                                <h3>{book.title}</h3>
                                <div className="img-div">
                                    <img src={book.cover ? book.cover : defaultBookCover}
                                        alt="Book cover"
                                        width="170" height="250"
                                    />
                                </div>
                                <div className="book-info">
                                    <p>{book.description}</p>
                                    <p>{book.author}</p>
                                    <p>{book.year}</p>
                                </div>
                                <Link
                                    to={{
                                        pathname: `/read-book/${book._id}`,
                                        state: {
                                            bookpath: book.path
                                        }
                                    }}
                                    className="btn-read-book"
                                >open to read</Link>
                            </div>
                        )
                    })
                    }
                </div>
            ) : <Redirect to="/login" />}
        </div >
    )
}

export default withRouter(Ebooks)
