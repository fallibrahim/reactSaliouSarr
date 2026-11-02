import { useState } from "react";
import  Champ  from "./Champ";

export default function FormulaireInscription() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    confirmation: "",
  });

  const [erreurs, setErreurs] = useState({});
  const [succes, setSucces] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const valider = () => {
    const nouvelles = {};

    if (!form.nom) nouvelles.nom = "Le nom est requis";
    if (!form.prenom) nouvelles.prenom = "Le prénom est requis";
    if (!form.email.includes("@"))
      nouvelles.email = "Email invalide";
    if (form.motDePasse.length < 8)
      nouvelles.motDePasse = "Au moins 8 caractères";
    if (form.motDePasse !== form.confirmation)
      nouvelles.confirmation = "Mots de passe différents";

    return nouvelles;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = valider();

    if (Object.keys(errs).length > 0) {
      setErreurs(errs);
      return;
    }

    setSucces(true);
  };

  if (succes) {
    return (
      <div className="text-center p-10 text-green-600 text-xl">
        ✅ Inscription réussie !
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        📝 Inscription
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <Champ
          label="Prénom"
          name="prenom"
          value={form.prenom}
          erreur={erreurs.prenom}
          onChange={handleChange}
        />

        <Champ
          label="Nom"
          name="nom"
          value={form.nom}
          erreur={erreurs.nom}
          onChange={handleChange}
        />
      </div>

      <Champ
        label="Email"
        name="email"
        type="email"
        value={form.email}
        erreur={erreurs.email}
        onChange={handleChange}
      />

      <Champ
        label="Mot de passe"
        name="motDePasse"
        type="password"
        value={form.motDePasse}
        erreur={erreurs.motDePasse}
        onChange={handleChange}
      />

      <Champ
        label="Confirmer"
        name="confirmation"
        type="password"
        value={form.confirmation}
        erreur={erreurs.confirmation}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition"
      >
        Créer mon compte
      </button>
    </form>
  );
}


