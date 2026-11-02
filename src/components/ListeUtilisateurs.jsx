import {useState, useEffect} from 'react'

const ListeUtilisateurs = () => {
    const [utilisateurs, setUtilisateurs] = useState([])
 const [chargement, setChargement] = useState(true)
 const [erreur, setErreur] = useState(null)
 const [recherche, setRecherche] = useState('')
 
 
 useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => res.json())
 .then(data => { setUtilisateurs(data); setChargement(false) })
 .catch(err => { setErreur(err.message); setChargement(false) })
 }, []) // [] = exécuter une seule fois au montage

   const filtres = utilisateurs.filter(u =>
 u.name.toLowerCase().includes(recherche.toLowerCase())
 )
 if (chargement) return <div className='text-center py-20 text-xl'>⏳ Chargement...</div>
 if (erreur) return <div className='text-center py-20 text-red-500'>❌ {erreur}</div>
 return (
 <div className='max-w-3xl mx-auto p-6'>
 <h2 className='text-2xl font-bold mb-4'>👥 Utilisateurs ({filtres.length})</h2>
 <input value={recherche} onChange={e => setRecherche(e.target.value)} placeholder='Rechercher un utilisateur...'
 className='w-full border-2 border-gray-200 rounded-xl px-4 py-3 mb-6 focus:border-sky-400 focus:outline-none'
 />
 <div className='space-y-3'>{filtres.map(u => (
 <div key={u.id} className='bg-white rounded-xl shadow-sm p-4 flex items-center gap-4'>
 <div className='w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-lg'>{u.name[0]}</div>
 <div>
 <p className='font-semibold text-gray-800'>{u.name}</p>
 <p className='text-gray-500 text-sm'>{u.email}</p>
 <p className='text-gray-400 text-xs'>{u.company.name}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 )
}



export default ListeUtilisateurs;