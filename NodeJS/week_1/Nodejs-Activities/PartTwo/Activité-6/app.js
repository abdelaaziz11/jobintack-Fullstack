const http = require("http");
const Logger = require("./logger"); // import logger.js file to Logger object
const logger = new Logger(); // create new Logger in logger object

// use on method to listening for the message condition for exicute data
logger.on("messageLogger", (data) => {
    console.log("Evenement capture :", data);
});
const server = http.createServer((req, res) => {
    logger.log(`Requete recue : ${req.url}`);
    res.end("Requte enregistree !");
});

server.listen(4000, () => console.log("Server sur le port 4000..."));



// Débrief final
//  Non-bloquant : Le code continue pendant les opérations I/O.
//  Événements : Découplent les modules via la communication indirecte.
//  Serveur Node : Gère tout avec un seul thread via l’event loop.
//  Suite : Express, middlewares, JSON parsing.