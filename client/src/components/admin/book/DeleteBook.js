import React, { useContext } from 'react'
import { Redirect } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

export default function DeleteBook() {
    const { isAdmin, isAuth } = useContext(AuthContext)

    return (
        <div className="component-container ">
            { isAdmin && isAuth ? (
                <h3>delete book</h3>
            ) : <Redirect to="/login" />
            }
        </div>
    )
}
