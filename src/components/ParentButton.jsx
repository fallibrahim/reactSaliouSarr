import Button from './Button'; // Ajustez le chemin de l'import

export default function MonParent() {
  const handleClick = () => {
    alert('Bouton cliqué !');
  };

  return (
    <div className="p-6 space-y-4">
      {/* Bouton principal (primaire) par défaut */}
      <Button onClick={handleClick}>
        Cliquez ici
      </Button>
      <Button variante="danger" onClick={handleClick}>
        Cliquez ici
      </Button>

      {/* Bouton de succès, large et prenant toute la largeur */}
      <Button 
        variante="success" 
        taille="lg" 
        plein={true} 
        onClick={handleClick}
      >
        Valider le formulaire
      </Button>

      {/* Bouton en mode contour, désactivé */}
      <Button 
        variante="outline" 
        taille="sm" 
        disabled={true}
      >
        Supprimer (Désactivé)
      </Button>
    </div>
  );
}
