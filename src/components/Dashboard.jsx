import  {useState} from 'react'

const Dashboard = () => {
    const [estConnecte, setEstConnecte] = useState(false)
    const [chargement, setChargement] = useState(false)
    const utilisateur = { nom: 'Saliou Sarr', role: 'Admin', avatar: '👨💻'} 

    const connexion = () => {
     setChargement(true)
     setTimeout(() => { setEstConnecte(true); setChargement(false) }, 1500)
 }
 if (chargement) return (
 <div className='flex justify-center items-center min-h-screen'>
 <div className='animate-spin text-5xl'>⏳</div>
 </div>
 )
 if (!estConnecte) return (
 <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
 <div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
 <h2 className='text-2xl font-bold mb-6'>🔐 Connexion requise</h2>
 <button onClick={connexion} className='bg-sky-500 text-white px-8 py-3 rounded-xl hover:bg-sky-600 transition font-semibold'>
 Se connecter
 </button>
 </div>
 </div>
 )

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
 <div className='max-w-4xl mx-auto'>
 <div className='bg-white rounded-2xl shadow-md p-6 mb-6 flex justify-between items-center'>
 <div>
 <h1 className='text-2xl font-bold'>Tableau de bord
{utilisateur.avatar}</h1>
 <p className='text-gray-500'>{utilisateur.nom} —
{utilisateur.role}</p>
 </div>
 <button onClick={() => setEstConnecte(false)} className='text-red-500 hover:text-red-700 font-medium transiton'>
 Déconnexion
 </button>
 </div>
 <div className='grid grid-cols-3 gap-4'>
 {[
 { label: 'Projets', valeur: 24, icone: '📁', couleur: 'bg-blue-50' },
  
 { label: 'Messages', valeur: 8, icone: '💬', couleur: 'bg-green-50' },
 { label: 'Tâches', valeur: 13, icone: '✅', couleur: 'bg-yellow-50' },
 ].map(stat => (
 <div key={stat.label} className={`${stat.couleur} rounded-xl p-6 text-center`}>
 <div className='text-4xl mb-2'>{stat.icone}</div>
 <div className='text-3xl font-bold'>{stat.valeur}</div>
 <div className='text-gray-600'>{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 )
}

export default Dashboard
