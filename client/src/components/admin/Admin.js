import React, { useContext } from 'react'
import { Redirect } from "react-router-dom"
import NavbarAdmin from './NavbarAdmin'
import { AuthContext } from "../../context/AuthContext"
import '../../style/admin.scss'

export default function Admin() {
    const { isAdmin, isAuth } = useContext(AuthContext)

    return (
        <div className="admin">
            { isAdmin && isAuth ? (
                <div>
                    <h2>hallo admin</h2>
                    <NavbarAdmin />

                </div>
            )
                : <Redirect to="/login" />
            }
        </div>
    )
}
