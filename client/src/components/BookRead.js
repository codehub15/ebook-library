import React, { useEffect, useState, useContext } from 'react'
// import { Redirect, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { Document, Page, pdfjs } from "react-pdf"


export default function BookRead(props) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const { isAuth, userData, books, setBooks } = useContext(AuthContext)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    let pathname = props.location.state.bookpath
    // console.log("pathname:", pathname)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const clicked = ({ pageNumber }) => alert('Clicked an item from page ' + pageNumber + '!')

    return (
        <div>
            <Document
                file={pathname}
                onLoadSuccess={onDocumentLoadSuccess}
                onItemClick={clicked}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>

            <button onClick={() => setPageNumber(prevState => (prevState - 1))}>
                previous page
            </button>
            <button onClick={() => setPageNumber(prevState => (prevState + 1))}>
                Next page
            </button>

        </div >
    )
}
