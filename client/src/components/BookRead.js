import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf"

export default function BookRead(props) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    let pathname = props.location.state.bookpath

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <div className="read-book">
            <button onClick={() => setPageNumber(prevState => (prevState - 1))} className="btn-book-read btn-prev">
                previous page
            </button>

            <button onClick={() => setPageNumber(prevState => (prevState + 1))} className="btn-book-read btn-next">
                Next page
            </button>

            <Document
                file={pathname}
                onLoadSuccess={onDocumentLoadSuccess}
                className="book-doc"
            >
                <Page pageNumber={pageNumber} />
                <p>Page {pageNumber} of {numPages}</p>
            </Document>
        </div >
    )
}
