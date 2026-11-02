/* eslint-disable react-refresh/only-export-components */
import {createContext, useState, useContext} from "react"

// 1. créer un context
const AuthContext = createContext(null);

// 2. créer le provider (fournisseur de données)

export function AuthProvider({children}) {
    const [utilisateur, setUtilisateur] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const connexion = (userData, authToken) => {
        setUtilisateur(userData);
        setToken(authToken);
        localStorage.setItem('token', authToken)
    }

    const deconnexion = () => {
        setUtilisateur(null);
        setToken(null);
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{utilisateur, token, connexion, deconnexion}}>
          {children}
        </AuthContext.Provider>
    )
}

// 3. Hook personnalisé pour utiliser le context

export const useAuth = () => {
 const context = useContext(AuthContext)
 if (!context) throw new Error('useAuth doit être utilisé dans AuthProvider')
 return context
}
