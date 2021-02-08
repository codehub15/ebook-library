import React, { useContext } from 'react'
import { Redirect } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function UserAccount(props) {
    const { isAuth, userData } = useContext(AuthContext)
    console.log("user data api:", userData)
    console.log("user props:", props.user)

    return (
        isAuth ? (<div className="component-container user-account" >
            <h2>{userData.userName}, welcome to the ebook library</h2>
            <h3>User Data</h3>
            <p>User name: {userData.userName} </p>
            <p>Email: {userData.email} </p>
        </div>) : (<Redirect to="/login" />)
    )
}
