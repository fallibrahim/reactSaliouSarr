import Navbar from "./components/Navbar";
import ProfilCard from "./components/ProfilCard";
import Footer from "./components/Footer";
import Compteur from "./components/Compteur";
import TodoApp from "./components/TodoApp";
import FormulaireContact from "./components/FormulaireContact";
import Dashboard from "./components/Dashboard";
import ListeProduits from "./components/ListeProduits";
import ListeUtilisateurs from "./components/ListeUtilisateurs";
import  FormulaireInscription from "./components/FormulaireInscription";
import LandingPage from "./components/LandingPage";
import {useState} from "react";
import Modal from "./components/Modal";
import ParentButton from "./components/ParentButton"
import AppMeteo from "./components/AppMeteo"
import Login from "./pages/login"
import GestionProduits from "./pages/GestionProduits"
import {Camera} from "lucide-react"
import {FolderLock} from "lucide-react"
function App() {
   const [isOpen, setIsOpen] = useState(false)
  return (
  <>
    <div className="flex flex-col min-h-screen">
       <Navbar/>
       <main className="flex-1">
         <LandingPage/>
         <ProfilCard/>
         <Compteur/>
         <TodoApp/>
         <FormulaireContact/>
         <Dashboard/>
         <ListeProduits/>
         <ListeUtilisateurs/>
         <FormulaireInscription/>
         {/* <Routes>
          <Route path='/profil' element={<ProfilCard />} />
          <Route path='/todos' element={<TodoApp />} />
          <Route path='/contact' element={<FormulaireContact />} />
          <Route path='/dashboard' element={<Dashboard />} /> {/*
Route dynamique */}
          {/* <Route path='/products' element={<ListeProduits />} /> */}
          {/* <Route path='users' element={<ListeUtilisateurs />} />  */}
          {/* <Route path='/inscription' element={<FormulaireInscription />} />  */}
          
        {/* </Routes> */} 

        <button onClick={() => setIsOpen(true)} className='bg-sky-500 text-white px-4 py-2 rounded-lg'>
         Ouvrir Modal
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} titre='Confirmation'>
        <p className='text-gray-600 mb-4'>Voulez-vous vraiment supprimer cet élément ?</p>
        <div className='flex gap-3 justify-end'>
        <button onClick={() => setIsOpen(false)} className='px-4 py-2 border rounded-lg hover:bg-gray-50'>Annuler</button>
        <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>Supprimer</button>
        </div>
        </Modal>
        <ParentButton/>
        <AppMeteo/>
        <Login/>
        <GestionProduits/>
        <Camera size={48} color="red" strokeWidth={1} />
        <FolderLock strokeWidth={1} />
       </main>
      <Footer/>
    </div>
  </>
  );
}

export default App;
