import { Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
function Navbar() {
 const liens = ['Accueil', 'À propos', 'Projets', 'Contact']
 const {utilisateur, deconnexion} = useAuth;
 return (
 <nav className='bg-slate-900 text-white px-6 py-4 flex justify-between items-center fixed w-full z-50'>
 <div className='text-2xl font-bold text-sky-400'>⚡ Ibrahima {utilisateur ? <>Bonjour {utilisateur.nom}<button onClick={deconnexion}>Déconnexion</button></> :  <Link to='/login'>Connexion</Link>}</div>
<ul className='flex gap-6'>
    {liens.map((lien) => (
    <li key={lien}><Link href={`#${lien.toLowerCase()}`} className='hover:text-sky-400 transition-colors duration-200'>{lien}</Link></li>
 ))}
 </ul>
   <button className='bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg transition'>Me contacter</button>
 </nav>
 )
}
export default Navbar