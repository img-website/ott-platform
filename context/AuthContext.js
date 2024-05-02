'use client'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        userId: localStorage.getItem("token"),
        userData: {},
        isAuthenticated: localStorage.getItem("token") ? true : false
    })

    useEffect(() => {
        localStorage.setItem("token", authData?.userId)
    }, [authData?.userId])
    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider