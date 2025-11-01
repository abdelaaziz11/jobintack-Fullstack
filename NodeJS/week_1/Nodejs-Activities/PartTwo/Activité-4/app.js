const Logger = require("./logger"); // import logger.js file to Logger object
const logger = new Logger(); // create new Logger in logger object

// use on method to listening for the message condition for exicute data
logger.on("messageLogger", (data) => {
    console.log("Evenement capture :", data);
});

logger.log("Application demaree !"); // log that app is start working



// Discussion:
// Instance directe : simple, utile pour un usage rapide d’événements.
// Classe qui étend EventEmitter : permet d’organiser, réutiliser et encapsuler la logique.

// Encapsuler dans une classe = code plus clair, modulable et orienté objet.