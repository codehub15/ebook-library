import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"
import '../style/navbar.scss';

export default function Navbar() {
    const { isAuth } = useContext(AuthContext)

    return (
        <div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink className="main-nav-link" to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    {!isAuth ? (
                        <div className="nav-li-div">
                            <li>
                                <NavLink className="main-nav-link" to="/login" activeClassName="active">Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="main-nav-link" to="/signup" activeClassName="active">Sign up</NavLink>
                            </li>
                        </div>
                    ) : (
                            <div className="nav-li-div">
                                <li>
                                    <NavLink className="main-nav-link" to="/ebooks" activeClassName="active">eBooks</NavLink>
                                </li>
                                <li>
                                    <NavLink className="main-nav-link" to="/account" activeClassName="active">My Account</NavLink>
                                </li>
                                <li>
                                    <NavLink className="main-nav-link" to="/logout" activeClassName="active">Logout</NavLink>
                                </li>
                            </div>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}
