import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"

export default function Account() {
    const { isAuth, isAdmin } = useContext(AuthContext)

    return (
        <div className="account">
            {!isAuth ?
                <Redirect to="/login" />
                :
                (isAdmin ?
                    <Redirect to="/admin" />
                    :
                    <Redirect to="/userAccount" />
                )
            }
        </div>
    )
}
