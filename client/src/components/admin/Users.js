import React, { useState, useContext } from 'react'
import { Redirect } from "react-router-dom"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

export default function Users() {
    const { isAdmin, isAuth, token } = useContext(AuthContext)
    const [users, setUsers] = useState(null)

    fetch("/users", {
        headers: {
            "content-type": "application/json",
            "x-auth": token
        }
    })
        .then(res => res.json())
        .then(data => {
            setUsers(data.users)
        })

    return (
        <div className="component-container users">
            <h2>Users</h2>
            {isAdmin && isAuth ?
                <>
                    {users && users.filter(user => user.role !== "Admin").map(user => {
                        return (
                            <div key={user._id} className="user">
                                <h3>{user.userName}</h3>
                                <p>{user.email}</p>
                            </div>
                        )
                    })
                    }
                    <Link to="/admin" className="link-btn">go back</Link>
                </>
                : <Redirect to="/login" />
            }
        </div>
    )
}
