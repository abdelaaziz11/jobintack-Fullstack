console.log(__filename);
console.log(__dirname);
console.log(module);
console.log(exports === module.exports);

exports.dirSalut = () => console.log("Salut !");
console.log(module.exports)


// Discussion:
// __filename → chemin complet du fichier en cours.
// __dirname → dossier où se trouve le fichier.
// module → objet représentant le module actuel.
// exports → raccourci vers module.exports pour exporter du code.

// exports = function() doesn’t work because it breaks the link with module.exports.
// Relation: exports and module.exports start as the same object, but only module.exports is actually exported.