import React, { useState, useContext } from 'react'
import { Redirect } from "react-router-dom"
import axios from 'axios'
import { AuthContext } from "../../../context/AuthContext"
// import { FilePond, registerPlugin } from "react-filepond"
// import FilePondPluginImagePreview from "filepond-plugin-image-preview"
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
// import "filepond/dist/filepond.min.css"
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

// registerPlugin(
//     FilePondPluginImagePreview, FilePondPluginFileValidateType
// )

export default function AddBook() {
    const { isAdmin, isAuth, token } = useContext(AuthContext)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [fileBook, setFileBook] = useState("")
    const [fileCover, setFileCover] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        // data from form input
        let bookData = new FormData();
        bookData.append('title', title)
        bookData.append('description', description)
        bookData.append('author', author)
        bookData.append('year', year)
        bookData.append('file', fileBook)
        bookData.append('cover', fileCover)
        console.log("bookData:", bookData)
        // post data to sever
        try {
            const res = await axios.post('/books', bookData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth': token
                }
            });
            if (res.status) {
                console.log('server response:', res)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="component-container ">
            { isAdmin && isAuth ? (
                <div>
                    <form onSubmit={submitHandler} encType="multipart/form-data" className="add-book">
                        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="title" />
                        <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} placeholder="description" />
                        <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
                        <input type="text" name="year" onChange={(e) => setYear(e.target.value)} placeholder="year" />
                        <label htmlFor="book-file">Book File</label>
                        <input
                            type="file"
                            name="file"
                            id="book-file"
                            placeholder="Only .pdf"
                            onChange={(e) => setFileBook(e.target.files[0])}
                        />
                        <label htmlFor="book-cover">Book Cover</label>
                        <input
                            type="file"
                            name="cover"
                            id="book-cover"
                            placeholder="Only .png or .jpeg"
                            onChange={(e) => setFileCover(e.target.files[0])}
                        />
                        <button type="submit" className="btn btn-submit">add book</button>
                    </form>

                    {/* <FilePond
                        name="file-upload"
                        files={file}
                        onupdatefiles={setFile}
                        onprocessfile={() => {
                            setFile()
                        }}
                        server={{
                            url: "http://localhost:5000/books/" + userData._id,
                            process: {
                                headers: {
                                    'x-auth': token
                                }
                            }
                        }}
                        maxFiles={1}
                        className="filepath"
                    /> */}
                </div>
            )
                : <Redirect to="/login" />
            }
        </div>
    )
}