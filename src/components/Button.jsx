// Composant Button réutilisable avec variantes
export default function Button({ children, variante = 'primary', taille = 'md', plein =
false, onClick, disabled }) {
 const variantes = {
 primary: 'bg-sky-500 hover:bg-sky-600 text-white',
 secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
 success: 'bg-green-500 hover:bg-green-600 text-white',
 danger: 'bg-red-500 hover:bg-red-600 text-white',
 outline: 'border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white',
 ghost: 'text-gray-600 hover:bg-gray-100',
 }
 const tailles = {
 sm: 'px-3 py-1.5 text-sm',
 md: 'px-4 py-2 text-base',
 lg: 'px-6 py-3 text-lg',
 xl: 'px-8 py-4 text-xl',
 }
 return (
 <button
 onClick={onClick}
 disabled={disabled}
 className={`${variantes[variante]} ${tailles[taille]} ${plein ? 'w-full' : ''} rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0`}
 >
 {children}
 </button>
 )
}