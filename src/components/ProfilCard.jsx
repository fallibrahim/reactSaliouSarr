const ProfilCard = () => {
    const user = {
        firstname : "Ibrahima",
        lastname : "fall",
        bissness : "developper",
        competences : ["HTML", "CSS", "JAVASCRIPT"]
    }

   const disponible = true;

    return (
        <>
           <div className="flex flex-col w-1/3 p-6 shadow-md rounded-xl bg-white min-h-[30Opx] mx-auto mt-10">
               <p className="text-4xl font-bold mb-4">Prénom : {user.firstname} {user.lastname}</p>
               <p className="text-4xl font-bold">Métier : {user.bissness}</p>
               <ul className="flex justify-center gap-3 items-end mt-5 mb-4">
                 {
                   user.competences.map((competence, index) =>(
                         <li key={index} className="text-sky-500">{competence}</li>
                     ))
                 }
           </ul>
             {disponible && <p className="text-sm font-bold text-gray-400 text-center">✅ Disponible pour projets</p> }
           </div>
        </>
    )
}
export default ProfilCard;