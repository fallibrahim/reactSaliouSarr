function Footer()  {
const annee = new Date().getFullYear()
 return (
 <footer className='bg-slate-900 text-gray-400 text-center py-8 mt-auto'>
 <p>© {annee} ibrahimafall — Fait avec ❤️ en React + Tailwind</p>

 </footer>
 )
}
export default Footer

