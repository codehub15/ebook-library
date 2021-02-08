import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import '../../style/auth.scss'

export default function Login() {
    const { isAuth, setIsAuth, setIsAdmin, token, setToken, setCookies, userData, setUserData } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    console.log("login user:", userData)

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
        const response = await fetch('/users/login', options)
        console.log('login response:', response)
        const data = await response.json()
        console.log('login data:', data)

        if (!data.user) {
            setMsg("sorry, something went wrong")
            setEmail("")
            setPassword("")
        } else {
            if (data.user.role === "Admin") {
                setIsAdmin(true)
            } else {
                setIsAdmin(false)
            }
        }
        if (data.success) {
            setIsAuth(true)
            setCookies(true)
            setToken(data.token)
            localStorage.setItem("login", true)
            localStorage.setItem("id", data.user._id)
            // localStorage.setItem('token', data.token);
            setUserData(data.user)
        } else {
            setMsg("wrong login data")
            setIsAuth(false)
        }
        console.log(response.headers.get("x-auth"))
    }

    return (
        <div className="login-container">
            <p className="msg wrong">{msg}</p>
            {isAuth ? <Redirect to="/account" user={userData} /> :
                <div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input type="text" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            }
        </div>
    )
}
