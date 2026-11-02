import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../services/api'
 export default function Login() {
 const [form, setForm] = useState({ email: '', motDePasse: '' })
 const [erreur, setErreur] = useState('')
 const [chargement, setChargement] = useState(false)
 const { connexion } = useAuth()
 const navigate = useNavigate()
 const handleSubmit = async (e) => {
 e.preventDefault()
 setErreur(''); setChargement(true)
 try {
 const { data } = await api.post('/auth/login', form)
 connexion(data.utilisateur, data.token)
 navigate('/dashboard')
 } catch (err) {
 setErreur(err.response?.data?.message || 'Identifiants incorrects')
 } finally {
 setChargement(false)
 }
 }
 return (
 <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
 <div className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-md'>
 <div className='text-center mb-8'>
 <div className='text-5xl mb-4'>🔐</div>
 <h1 className='text-2xl font-bold text-gray-800'>Connexion</h1>
 <p className='text-gray-500 mt-1'>Bienvenue ! Connectez-vous à
votre compte.</p>
 </div>
 {erreur && <div className='bg-red-50 text-red-600 border borderred-200 rounded-xl p-4 mb-4'>⚠️ {erreur}</div>}
 <form onSubmit={handleSubmit} className='space-y-4'>
 <div>
 <label className='block text-sm font-medium text-gray-700 mb1'>Email</label>
 <input type='email' required value={form.email}
 onChange={e => setForm({...form, email: e.target.value})}
 className='w-full border-2 border-gray-200 rounded-xl px-4
py-3 focus:border-sky-400 focus:outline-none'
 placeholder='saliou@exemple.com' />
 </div>
 <div>
 <label className='block text-sm font-medium text-gray-700 mb1'>Mot de passe</label>
 <input type='password' required value={form.motDePasse}
 onChange={e => setForm({...form, motDePasse:
e.target.value})}
 className='w-full border-2 border-gray-200 rounded-xl px-4
py-3 focus:border-sky-400 focus:outline-none'
 placeholder='••••••••' />
 </div>
 <button type='submit' disabled={chargement}
 className='w-full bg-sky-500 text-white py-3 rounded-xl fontsemibold hover:bg-sky-600 transition disabled:opacity-60'>
 {chargement ? '⏳ Connexion...' : 'Se connecter'}
 </button>
 </form>
 </div>
 </div>
 )
}