
const ListeProduits = () => {
const produits = [
 { id: 1, nom: 'iPhone 15', prix: 850000, categorie: 'Téléphone', stock:
12 },
 { id: 2, nom: 'MacBook Pro', prix: 1200000, categorie: 'Ordinateur',
stock: 5 },
 { id: 3, nom: 'AirPods Pro', prix: 180000, categorie: 'Audio', stock:
30 },
 ]
 return (
 <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
 {produits.map((produit) => (
 // key est OBLIGATOIRE et doit être UNIQUE
 <div key={produit.id} className='bg-white rounded-xl shadow-md p-5'>
 <span className='text-xs text-sky-500 font-medium bg-sky-50 px-2 py-1 rounded'>
 {produit.categorie}
 </span>
 <h3 className='text-lg font-bold mt-3 mb-1'>{produit.nom}</h3>
 <p className='text-2xl font-bold text-sky-600'>
 {produit.prix.toLocaleString('fr-FR')} FCFA
 </p>
 <p className='text-gray-400 text-sm'>Stock : {produit.stock}</p>
 <button className='mt-4 w-full bg-sky-500 text-white py-2
rounded-lg hover:bg-sky-600 transition'>
 Ajouter au panier
 </button>
 </div>
 ))}
 </div>
 )
}


export default ListeProduits
