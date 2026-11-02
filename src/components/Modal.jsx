
export default function Modal({ isOpen, onClose, titre, children }) {
 if (!isOpen) return null
 return (
 // Overlay sombre
 <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4' onClick={onClose}
 >
 {/* Boîte de dialogue */}
 <div className='bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fadeIn' onClick={e => e.stopPropagation()}
>
 <div className='flex justify-between items-center mb-6'>
 <h3 className='text-xl font-bold text-gray-800'>{titre}</h3>
 <button onClick={onClose} className='text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100'> ✕ </button>
 </div>
 {children}
 </div>
 </div>
 )
}
// Utilisation
