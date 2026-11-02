export default function LandingPage() {
 return (
 <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900'>
 {/* Hero Section */}
 <section className='flex flex-col items-center justify-center min-h-screen text-center px-6'>
 <span className='text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4'>🚀 Développeur Frontend
 </span>
 <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-tight'>
 Bonjour, je suis<br/>
 <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400'>
 Ibrahima FALL
 </span>
 </h1>
 <p className='text-gray-300 text-xl max-w-2xl mb-10'>
 Je crée des interfaces modernes avec React.js et Tailwind CSS.
 Passionné par le design et les performances web.
 </p>
 <div className='flex flex-wrap gap-4 justify-center'>
 <button className='bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition transform hover:-translate-y-1'>
 Voir mes projets
 </button>
<button className='border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-sky-400 hover:text-sky-400 transition'>
 Télécharger CV
 </button>
 </div>
 {/* Tech stack badges */}
 <div className='flex flex-wrap gap-3 mt-12 justify-center'>
 {['React', 'Tailwind CSS', 'Node.js', 'MongoDB',
'TypeScript'].map(tech => (
 <span key={tech} className='bg-white/10 text-gray-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20'>
 {tech}
 </span>
 ))}
 </div>
 </section>
 {/* Stats Section */}
 <section className='py-20 bg-white/5 backdrop-blur-sm'>
 <div className='max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white'>
 {[
 { chiffre: '50+', label: 'Projets réalisés' },
 { chiffre: '30+', label: 'Clients satisfaits' },
 { chiffre: '3 ans', label: 'D\'expérience' },
 { chiffre: '100%', label: 'Satisfaction' },
 ].map(stat => (
 <div key={stat.label}>
 <div className='text-4xl font-black text-sky400'>{stat.chiffre}</div>
 <div className='text-gray-400 mt-1'>{stat.label}</div>
 </div>
 ))}
 </div>
 </section>
 </div>
 )
}
