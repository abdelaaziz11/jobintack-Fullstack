// import http to http object
const http = require("http");

// create a server
const server = http.createServer((req, res) => {
    if (req.url === "/") { // check the url for write a response
        res.write("Bienvenue sur notre serveur Node.js !");
        res.end();
    } else if (req.url === "/api/etudiants") { // other check url /api/etudiants for write head content type and json
        res.writeHead(200, {"Content-Type": "application/json" });
        res.end(JSON.stringify(["Asma", "Youness", "Oussama"]));
    } else { // error check in otherwise 
        res.writeHead(404);
        res.end("Page non trouvee");
    }
});
// listen server on port 3000
server.listen(3000, () => console.log("Serveur en ecoute sur le port 3000..."));