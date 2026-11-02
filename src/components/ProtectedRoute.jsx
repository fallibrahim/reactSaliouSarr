// src/components/ProtectedRoute.jsx — Route protégée
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
export function ProtectedRoute({ children }) {
 const { token } = useAuth()
 return token ? children : <Navigate to='/login' replace />
}