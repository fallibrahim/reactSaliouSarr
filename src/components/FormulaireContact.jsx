import { useState } from 'react'
export default function FormulaireContact() {
 const [form, setForm] = useState({
 nom: '', email: '', sujet: '', message: ''
 })
 const [envoye, setEnvoye] = useState(false)
 const handleChange = (e) => {
 setForm({ ...form, [e.target.name]: e.target.value })
 }
 const handleSubmit = (e) => {
 e.preventDefault() // Empêche le rechargement de la page
 console.log('Données du formulaire :', form)
 setEnvoye(true)
 setTimeout(() => setEnvoye(false), 3000)
 setForm({
 nom: '', email: '', sujet: '', message: ''
 })
 }
 if (envoye) return (
 <div className='text-center p-8 text-green-600'>
 <p className='text-4xl mb-4'>✅</p>
 <p className='text-xl font-semibold'>Message envoyé avec succès !</p>
 </div>
 )

 return (
 <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-6 space-y-4'>
 <h2 className='text-2xl font-bold text-gray-800'>📬 Contactez-nous</h2>
 {[
 { label: 'Nom complet', name: 'nom', type: 'text' },
 { label: 'Email', name: 'email', type: 'email' },
 { label: 'Sujet', name: 'sujet', type: 'text' },
 ].map(({ label, name, type }) => (
 <div key={name}>
 <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>
 <input
 type={type}
 name={name}
 value={form[name]}
 onChange={handleChange}
 required
 className='w-full border-2 border-gray-200 rounded-xl px-4 py-2
focus:border-sky-400 focus:outline-none'
 />
 </div>
 ))}
 <div>
 <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
 <textarea
 name='message'
 value={form.message}
 onChange={handleChange}
 rows={5}
 required
 className='w-full border-2 border-gray-200 rounded-xl px-4 py-2
focus:border-sky-400 focus:outline-none resize-none'
 />
 </div>
 <button type='submit' className='w-full bg-sky-500 text-white py-3
rounded-xl font-semibold hover:bg-sky-600 transition'>
 Envoyer le message
 </button>
 </form>
 )
}
