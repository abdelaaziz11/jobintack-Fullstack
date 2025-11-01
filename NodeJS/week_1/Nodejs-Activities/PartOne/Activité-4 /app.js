const { ajouterContact, listerContact } = require("./contactService");
const formaterContact = require('./utils/format');


ajouterContact("Alice", "06060606")
ajouterContact("Bob", "06011106")

listerContact().forEach(c => console.log(formaterContact(c)))



// Discussion:
// Chaque module doit faire une seule tâche claire (ex : logique, affichage, ou configuration).
// ContactService : ajouter les contacts et return les contacts que nous ajoutons
// format : return la telephone et le nom en les contacts


// Pourquoi séparer formatage, logique et point d’entrée :
// Formatage → gère l’affichage.
// Logique → gère les calculs ou règles.
// Point d’entrée → lance l’application.

// Avantage pour la maintenance :
// Le code est plus clair, réutilisable, facile à tester et à modifier sans casser le reste du projet.