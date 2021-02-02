import React, { useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [cookies, setCookies] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [msg, setMsg] = useState("")
    const [userData, setUserData] = useState("")

    // const login = () => {
    //     let data = localStorage.getItem("login");
    //     if (data) {
    //         setCookies(true);
    //     }
    // }

    // const logout = () => {
    //     fetch("/users/logout");
    //     localStorage.clear();
    //     setCookies(false);
    // };

    return (
        <AuthContext.Provider value={{
            token, setToken,
            cookies, setCookies,
            isAuth, setIsAuth,
            isAdmin, setIsAdmin,
            userData, setUserData,
            msg, setMsg,
            // login, logout
        }}>
            { children}
        </AuthContext.Provider >
    );
}

export { AuthContext, AuthProvider };
