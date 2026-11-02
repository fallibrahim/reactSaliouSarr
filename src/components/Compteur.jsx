// src/components/Compteur.jsx
import { useState } from 'react'
function Compteur() {
 const [compte, setCompte] = useState(0)
 const [pas, setPas] = useState(1)
 const incrementer = () => setCompte(c => c + pas)
 const decrementer = () => setCompte(c => c - pas)
 const reinitialiser = () => setCompte(0)
 const couleur = compte > 0 ? 'text-green-600' : compte < 0 ? 'text-red-600' : 'text-gray-800'
 return (
 <div className='flex flex-col items-center gap-6 p-8'>
 <h2 className='text-3xl font-bold'>Compteur React</h2>
 {/* Valeur */}
 <div className={`text-7xl font-bold ${couleur} transition-colors`}>
 {compte}
 </div>
 {/* Pas */}
 <div className='flex items-center gap-4'>
 <label className='font-semibold'>Pas :</label>
 <input type='number' value={pas} onChange={(e) => setPas(Number(e.target.value))} className='w-20 border-2 border-gray-300 rounded-lg p-2 textcenter' min='1' />
 </div>
 {/* Boutons */}
 <div className='flex gap-4'>
 <button onClick={decrementer} className='px-6 py-3 bg-red-500 text-white rounded-xl text-xl font-bold hover:bg-red-600 transition'>− {pas}
 </button>
 <button onClick={reinitialiser} className='px-6 py-3 bg-gray-500
text-white rounded-xl text-xl font-bold hover:bg-gray-600 transition'>
 Reset
 </button>
 <button onClick={incrementer} className='px-6 py-3 bg-green-500 text-white rounded-xl text-xl font-bold hover:bg-green-600 transition'>+ {pas}</button>
 </div>
 </div>
 )
}

export default Compteur;