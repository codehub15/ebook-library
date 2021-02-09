import React, { useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [cookies, setCookies] = useState(false)
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('login')))
    const [isAdmin, setIsAdmin] = useState(false)
    const [books, setBooks] = useState([])
    const [userData, setUserData] = useState("")

    return (
        <AuthContext.Provider value={{
            token, setToken,
            cookies, setCookies,
            isAuth, setIsAuth,
            isAdmin, setIsAdmin,
            userData, setUserData,
            books, setBooks,
        }}>
            { children}
        </AuthContext.Provider >
    );
}

export { AuthContext, AuthProvider };
