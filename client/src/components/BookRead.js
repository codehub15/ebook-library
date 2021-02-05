import React, { useEffect, useState, useContext } from 'react'
import { Redirect, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { Document, Page, pdfjs } from "react-pdf"
// import pdf from '../assets/8ba7955af53e9a57c23b0477526a09c3'

export default function BookRead(props) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { isAuth, userData, books, setBooks } = useContext(AuthContext)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    console.log("PROPS:", props)
    // console.log("test:", props.params.testvalue)
    console.log("test:", props.location.state)

    console.log("path:", props.location.state.bookpath)
    let pathname = props.location.state.bookpath

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    console.log("book props:", props)
    console.log("book read:", books)
    // console.log("BOOK:", book)

    return (
        <div>
            <Document
                // file={`${books.bookFileName}.pdf`}
                // file={`${pathname}.pdf`}
                // file="8ba7955af53e9a57c23b0477526a09c3.pdf"
                // file={pathname}
                file={`data:application/pdf;base64,${pathname}`}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}
