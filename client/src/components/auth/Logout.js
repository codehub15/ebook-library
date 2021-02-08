import React, { useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export default function Logout() {
    const { isAuth, setIsAuth, setCookies } = useContext(AuthContext)

    // useEffect(() => {
    fetch("/users/logout")
    localStorage.clear();
    setCookies(false);
    setIsAuth(false)
    // }, [])

    return (
        isAuth ?
            <div className="component-container">
                <p>You are logged out.</p>
            </div>
            : <Redirect to="/login" />
    )
}
