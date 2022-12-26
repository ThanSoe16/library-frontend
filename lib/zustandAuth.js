import { createContext, useContext } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children, store }) => {
    return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}

export const useAuthStore = (selector, eqFn) => {
    const store = useContext(AuthContext)
    const values = store(selector, eqFn)

    return values
}
