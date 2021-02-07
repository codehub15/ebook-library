import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"
import '../style/auth.scss'


export default function Login() {
    const { isAuth, setIsAuth, setIsAdmin, token, setToken, setCookies, setUserData } = useContext(AuthContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    // const login = () => {
    //     let data = localStorage.getItem("login")
    //     if (data) {
    //         setCookies(true)
    //     }
    // }

    useEffect(() => {
        // login()
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-auth": token
            },
            body: JSON.stringify(userData)
        }
        const response = await fetch('http://localhost:5000/users/login', options)
        console.log('login response:', response)
        const data = await response.json()
        console.log('login data:', data)

        if (data.user.role === "Admin") {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }

        if (data.success) {
            setIsAuth(true)
            setCookies(true)
            setToken(data.token)
            setUserData(data.user)
            // localStorage.setItem("login", true)
            // localStorage.setItem("id", data.user._id)
        } else {
            alert("wrong login data")
            setIsAuth(false)
        }
        console.log(response.headers.get("x-auth"))
    }

    return (
        <div className="login-container">
            {isAuth ? <Redirect to="/account" /> :
                <div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input type="text" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            }
        </div>
    )
}
