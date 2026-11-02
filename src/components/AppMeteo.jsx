import { useState } from 'react'
import axios from 'axios'
// Utilise OpenWeatherMap API (clé gratuite sur openweathermap.org)
const API_KEY = 'ta_cle_api'
export default function AppMeteo() {
 const [ville, setVille] = useState('')
 const [meteo, setMeteo] = useState(null)
 const [chargement, setChargement] = useState(false)
 const [erreur, setErreur] = useState('')
 const chercher = async (e) => {
 e.preventDefault()
 if (!ville.trim()) return
 setChargement(true); 
 setErreur(''); 
 setMeteo(null)
 try {
 const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`)
 setMeteo(data)
 } catch {
 setErreur('Ville introuvable. Vérifiez le nom.')
 } finally {
 setChargement(false)
 }
 }
 const iconeUrl = meteo ?
`https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png` : null
 return (
 <div className='min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center p-4'>
  <div className='bg-white/20 backdrop-blur-md rounded-3xl p-8 w-full max-w-md text-white'>
    <h1 className='text-3xl font-bold text-center mb-6'>🌤 Météo</h1>
    <form onSubmit={chercher} className='flex gap-2 mb-6'>
       <input value={ville} onChange={e => setVille(e.target.value)} placeholder='Dakar, Paris, New York...' className='flex-1 bg-white/20 rounded-xl px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50'/>
       <button type='submit' className='bg-white text-sky-600 px-5 py-3 rounded-xl font-semibold hover:bg-white/90 transition'>🔍</button>
    </form>
 {chargement && <div className='text-center text-xl animate-pulse'>Chargement...</div>}
 {erreur && <div className='text-center bg-red-400/30 rounded-xl p4'>{erreur}</div>}
 {meteo && (
 <div className='text-center'>
 <h2 className='text-2xl font-bold'>{meteo.name},
{meteo.sys.country}</h2>
 <img src={iconeUrl} alt='météo' className='w-24 h-24 mx-auto'
/>
 <div className='text-7xl fontblack'>{Math.round(meteo.main.temp)}°C</div>
 <p className='text-xl
capitalize'>{meteo.weather[0].description}</p>
 <div className='grid grid-cols-2 gap-4 mt-6 text-sm'>
 <div className='bg-white/20 rounded-xl p-3'>💧 Humidité :
{meteo.main.humidity}%</div>
 <div className='bg-white/20 rounded-xl p-3'>💨 Vent :
{Math.round(meteo.wind.speed)} m/s</div>
 </div>
 </div>
 )}
 </div>
 </div>
 )
}