import { useState, useEffect } from 'react'
import api from '../services/api'

function GestionProduits() {
  const [produits, setProduits] = useState([])
  const [form, setForm] = useState({ nom: '', prix: '', stock: '', categorie: '' })
  const [modification, setModification] = useState(null) // null ou id
  const [modal, setModal] = useState(false)
  const [chargement, setChargement] = useState(false)
  const [recherche, setRecherche] = useState('')

  // 1. Déclarer la fonction principale de chargement
  const chargerProduits = async () => {
    setChargement(true)
    try {
      const { data } = await api.get('/produits')
      setProduits(data)
    } catch (err) {
      console.error(err)
    } finally {
      setChargement(false)
    }
  }

  // 2. Utilisation d'une fonction asynchrone isolée pour éviter le setState synchrone au montage
  useEffect(() => {
    let actif = true

    const initialiserProduits = async () => {
      try {
        setChargement(true)
        const { data } = await api.get('/produits')
        if (actif) {
          setProduits(data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        if (actif) {
          setChargement(false)
        }
      }
    }

    initialiserProduits()

    return () => {
      actif = false
    }
  }, [])

  // CREATE / UPDATE
  const soumettre = async (e) => {
    e.preventDefault()
    try {
      if (modification) {
        await api.put(`/produits/${modification}`, form)
      } else {
        await api.post('/produits', form)
      }
      chargerProduits()
      fermerModal()
    } catch (err) {
      console.error(err)
    }
  }

  // DELETE
  const supprimer = async (id) => {
    if (!confirm('Supprimer ce produit ?')) return
    try {
      await api.delete(`/produits/${id}`)
      setProduits(p => p.filter(prod => prod.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const ouvrirModification = (produit) => {
    setForm({
      nom: produit.nom,
      prix: produit.prix,
      stock: produit.stock,
      categorie: produit.categorie
    })
    setModification(produit.id)
    setModal(true)
  }

  const fermerModal = () => {
    setModal(false)
    setModification(null)
    setForm({ nom: '', prix: '', stock: '', categorie: '' })
  }

  // Filtres sécurisés
  const filtres = produits.filter(p => p.nom && p.nom.toLowerCase().includes(recherche.toLowerCase()))

  return (
    <div className='p-6 relative'>
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>
          📦 Gestion Produits ({produits.length})
        </h1>
        <button 
          onClick={() => setModal(true)} 
          className='bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition font-medium'
        >
          + Ajouter produit
        </button>
      </div>

      {/* Recherche */}
      <input 
        value={recherche} 
        onChange={e => setRecherche(e.target.value)} 
        placeholder='Rechercher un produit...' 
        className='w-full border-2 border-gray-200 rounded-xl px-4 py-3 mb-6 focus:border-sky-400 focus:outline-none' 
      />

      {/* Indicateur de Chargement */}
      {chargement && (
        <div className='text-center py-4 text-sky-500 font-medium animate-pulse'>
          Chargement des produits...
        </div>
      )}

      {/* Table */}
      {!chargement && (
        <div className='bg-white rounded-2xl shadow overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b'>
              <tr>
                {['Produit', 'Catégorie', 'Prix', 'Stock', 'Actions'].map(h => (
                  <th key={h} className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {filtres.map(produit => (
                <tr key={produit.id} className='hover:bg-gray-50 transition'>
                  <td className='px-6 py-4 font-medium text-gray-900'>{produit.nom}</td>
                  <td className='px-6 py-4'>
                    <span className='bg-sky-50 text-sky-700 px-2 py-1 rounded text-sm'>
                      {produit.categorie}
                    </span>
                  </td>
                  <td className='px-6 py-4 font-semibold text-sky-600'>
                    {Number(produit.prix).toLocaleString()} FCFA
                  </td>
                  <td className='px-6 py-4'>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${produit.stock > 10 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {produit.stock} unités
                    </span>
                  </td>
                  <td className='px-6 py-4 flex gap-2'>
                    <button 
                      onClick={() => ouvrirModification(produit)} 
                      className='text-blue-500 hover:text-blue-700 font-medium text-sm'
                    >
                      ✏️ Modifier
                    </button>
                    <button 
                      onClick={() => supprimer(produit.id)} 
                      className='text-red-500 hover:text-red-700 font-medium text-sm'
                    >
                      🗑️ Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Interface / Modale de Formulaire */}
      {modal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white p-6 rounded-2xl shadow-xl w-full max-w-md'>
            <h2 className='text-xl font-bold mb-4 text-gray-800'>
              {modification ? '✏️ Modifier le produit' : '➕ Ajouter un produit'}
            </h2>
            <form onSubmit={soumettre} className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Nom</label>
                <input 
                  type='text' 
                  required
                  value={form.nom} 
                  onChange={e => setForm({...form, nom: e.target.value})}
                  className='w-full border p-2 rounded-xl focus:outline-none focus:border-sky-400'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Catégorie</label>
                <input 
                  type='text' 
                  required
                  value={form.categorie} 
                  onChange={e => setForm({...form, categorie: e.target.value})}
                  className='w-full border p-2 rounded-xl focus:outline-none focus:border-sky-400'
                />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Prix (FCFA)</label>
                  <input 
                    type='number' 
                    required
                    value={form.prix} 
                    onChange={e => setForm({...form, prix: e.target.value})}
                    className='w-full border p-2 rounded-xl focus:outline-none focus:border-sky-400'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Stock</label>
                  <input 
                    type='number' 
                    required
                    value={form.stock} 
                    onChange={e => setForm({...form, stock: e.target.value})}
                    className='w-full border p-2 rounded-xl focus:outline-none focus:border-sky-400'
                  />
                </div>
              </div>
              <div className='flex justify-end gap-2 pt-2'>
                <button 
                  type='button' 
                  onClick={fermerModal} 
                  className='px-4 py-2 border text-gray-600 rounded-xl hover:bg-gray-50'
                >
                  Annuler
                </button>
                <button 
                  type='submit' 
                  className='px-4 py-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600'
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default GestionProduits;
