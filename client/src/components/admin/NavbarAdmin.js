import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarAdmin() {
    return (
        <div>
            <nav className="admin-nav">
                <h3>manage books</h3>
                <NavLink className="main-nav-link" to="/add-book" exact activeClassName="active">add ebook</NavLink>
                <NavLink className="main-nav-link" to="/edit-book" exact activeClassName="active">edit ebook</NavLink>
                <NavLink className="main-nav-link" to="/delete-book" exact activeClassName="active">delete ebook</NavLink>

                <h3>manage users</h3>
                <NavLink className="main-nav-link" to="/users" activeClassName="active">Users</NavLink>
            </nav>
        </div>
    )
}
