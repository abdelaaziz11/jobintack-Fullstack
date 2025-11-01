// import events and put them in EventEmitter object
const EventEmitter = require("events");
// put a nw EventEmitter to emitter object
const emitter = new EventEmitter();

// using 'on' method that lintening for utlisateurConnecte message for apply the socker
emitter.on("utilisateurConnecte", (data) => {
    console.log(`Nouvelle connexion : ${data.nom} ${data.id}`)
});

// 
emitter.emit("utilisateurConnecte", { id: 1, nom: "Asma" });


// Discussion:
// Listener après l’émission : ne sera pas appelé.
// Plusieurs listeners sur un même événement : oui, tous sont appelés dans l’ordre d’enregistrement.