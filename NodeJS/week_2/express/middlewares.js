import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middlewares intégrés
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

// Middlewares tiers
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(morgan('dev'));

// Middleware custom (logger simple fait main)
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Exemple de route
app.get('/', (req, res) => {
  res.send('Serveur Express opérationnel avec middlewares intégrés et tiers !');
});


app.listen(3000, () => {
    console.log("Server Runing on localhost3000")
})