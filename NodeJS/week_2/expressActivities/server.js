import express from 'express';
const app = express();
import fs from 'fs';

// Activitie 5 ---- 
app.use(express.static('public'))



// Activitie 3 ----------
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    req.startTime = Date.now();
    next();
});

app.get('/ping', (req, res) => {
    const duration = Date.now() - req.startTime;
    res.json({ message: 'pong', duration: `${duration}ms` })
});

// Discussion :
// next() : passe au middleware suivant.
// Global : agit sur toutes les routes.
// Spécifique : agit sur une seule route.
// Essentiels : ajoutent logs, sécurité, auth, parsing sans répéter le code.



// Activitie 1 ----------
app.get('/', (req, res) => {
    res.send("Welcome on my first server !");
});

// Discussion:
// Différence :
// Avec Node.js natif, tu dois tout gérer toi-même (routes, headers, parsing, erreurs…).
// Avec Express, tout ça est automatisé et simplifié.

// Express gère automatiquement :
// Le routing (app.get, app.post, etc.)
// Le parsing du JSON (express.json())
// Les réponses HTTP (res.send, res.json)
// Les middlewares (auth, logs, erreurs, etc.)
// Les fichiers statiques (express.static())



// Activitie 2 ----------
app.get('/api/products', (req,res) => {
    res.json([{ id: 1, name: 'Laptop'}, { id: 2, name: 'phone'},])
});

app.get('/api/products/:id', (req,res) => {
    res.json({ message: `{Prodduct ${req.params.id}}`})
});

// Discussion :
// JSON : format léger, lisible, standard pour échanger des données entre client et serveur.
// Routes séparées : chaque ressource a sa propre route pour être clairement identifiée et respecter la logique REST.



// Activitie 4 ---------
app.get('/api/crash', (req, res, next) => {
    const err = new Error('Erreur simulee ');
    next(err);
});

app.use((err, req, res, next) => {
    console.error('Erreur detectee :', err.message);
    res.status(500).json({ error: err.message });
});

// Discussion :
// Middleware d’erreur en dernier : il doit intercepter toutes les erreurs des middlewares précédents.
// throw new Error() : stoppe le code immédiatement.
// next(err) : envoie l’erreur au middleware d’erreur Express.



//Activitie 5 --------------
app.get('/api/products', (req, res) => {
    const data = fs.readFileSync('./data/prosucts.json');
    const products = JSON.parse(data);
    res.json(products);
})

// Discussion :
// Servir un fichier statique vs lire un JSON : le fichier statique est envoyé tel quel au client, le JSON est lu et éventuellement transformé avant envoi.
// readFileSync : bloque le serveur, pas recommandé en production.
// fs.promises : permet de lire les fichiers de manière asynchrone avec await fs.promises.readFile(...).


app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000")
})