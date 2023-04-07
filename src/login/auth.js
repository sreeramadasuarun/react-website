import React, { useState, useContext } from 'react'

const Authcontext = React.createContext()

export const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)

    const login = (username) => {
        setuser(username)
    }
    const logout = () => {
        setuser(null)
    }

    return <Authcontext.Provider value={{ user, login, logout }} >
        {children}
    </Authcontext.Provider>
}




export const useAuth = () => {
    return useContext(Authcontext)
}