import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import '../../style/auth.scss'

export default function Signup() {
    const { isAuth, setIsAuth, token, setToken, setCookies, setUserData } = useContext(AuthContext)
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSignUp = async (e) => {
        e.preventDefault()
        const userData = {
            userName,
            email,
            password
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-auth": token
            },
            body: JSON.stringify(userData)
        }
        const response = await fetch('/users', options)
        const data = await response.json()

        // check user input 
        if (userName === "" || email === "" || password === "") {
            alert("Please fill in all input fields.")
        }
        if (password == null || password.length < 6) {
            alert("The password should have at least 6 characters.")
        }
        if (email == null || email.indexOf('@') < 1 && email.lastIndexOf(".") < 2) {
            alert("Please enter correct email.")
        }
        // check account creation
        if (data.success) {
            alert("Your account was created successful.")
            setIsAuth(true)
            setCookies(true)
            setToken(data.token)
            setUserData(data.user)
            localStorage.setItem("login", true);
            localStorage.setItem("id", data.user._id);
        }
        else {
            alert("Your account can not be created. Please check if all input data is correct.")
        }
    };

    return (
        <div className="form-container">
            <h2>Sign up</h2>
            {isAuth ? <Redirect to="/userAccount" /> :
                <form onSubmit={handleSignUp}>
                    <input type="text" name="userName" placeholder="* Enter Name" required minLength="2" maxLength="15" onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" name="email" placeholder="* Enter Email" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="* Enter Password" required minLength="6" maxLength="20" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign up</button>
                </form>
            }
        </div>
    )
}
