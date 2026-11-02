import { useState } from "react";

function TodoApp() {
  const [taches, setTaches] = useState([
    { id: 1, texte: 'Apprendre React', fait: false },
    { id: 2, texte: 'Maîtriser Tailwind', fait: false },
    { id: 3, texte: 'Créer un projet', fait: true },
  ]);
  const [nouveau, setNouveau] = useState('');

  const ajouterTache = () => {
    if (!nouveau.trim()) return;
    
    setTaches([
      ...taches,
      {
        id: Date.now(), // 💡 Corrigé : ID unique basé sur le temps
        texte: nouveau.trim(),
        fait: false
      }
    ]);
    setNouveau('');
  };

  const toggleTache = (id) => {
    setTaches(taches.map(t =>
      t.id === id ? { ...t, fait: !t.fait } : t
    ));
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter(t => t.id !== id));
  };

  const tachesFaites = taches.filter(t => t.fait).length;

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold text-gray-800 mb-2'>📝 Todo App</h2>
      <p className='text-gray-500 mb-6'>{tachesFaites}/{taches.length} tâches terminées</p>
      
      {/* Formulaire */}
      <div className='flex gap-2 mb-6'>
        <input
          value={nouveau}
          onChange={(e) => setNouveau(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && ajouterTache()}
          placeholder='Nouvelle tâche...'
          className='flex-1 border-2 border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-sky-400'
        />
        <button
          onClick={ajouterTache}
          className='bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition' // 💡 Corrigé : hover:bg-sky-600
        >
          Ajouter
        </button>
      </div>

      {/* Liste */}
      <ul className='space-y-2'>
        {taches.map(tache => (
          <li key={tache.id} className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl'>
            <input
              type='checkbox'
              checked={tache.fait}
              onChange={() => toggleTache(tache.id)}
              className='w-5 h-5 accent-sky-500'
            />
            <span className={`flex-1 ${tache.fait ? 'line-through text-gray-400' : 'text-gray-800'}`}> {/* 💡 Corrigé : text-gray-400 */}
              {tache.texte}
            </span>
            <button
              onClick={() => supprimerTache(tache.id)}
              className='text-red-400 hover:text-red-600 text-lg'
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {taches.length === 0 && (
        <p className='text-center text-gray-400 py-8'>🎉 Toutes les tâches sont terminées !</p>
      )}
    </div>
  );
}

export default TodoApp;