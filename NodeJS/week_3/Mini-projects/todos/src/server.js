// 📁 server.js
// hada lmain file li kaybda bih lserver

const express = require('express');
const morgan = require('morgan');
const todoRoutes = require('./routes/todoRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const authRoute = require('./routes/auth.routes.js')
const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = require('./config/database.js') ;

const app = express();
const PORT = process.env.PORT ;

const MONGODB_URI = process.env.MONGODB_URI;

console.log(PORT, process.env.MONGODB_URI)

// باش نقدر نقرا body dyal POST sous format JSON
app.use(express.json());

// logger bach n3rf ach kayt executa f chaque requete
app.use(morgan('dev'));

// les routes principales
app.use('/api/todos', todoRoutes);

app.use('/api/auth', authRoute);

// middleware global dyal les erreurs
app.use(errorHandler);

async function start() {
  try {
    // 1. Connexion à MongoDB
    await connectToDatabase(MONGODB_URI);

  } catch (err) {
    console.error('Échec du démarrage de lapplication :', err.message);
    process.exit(1);
  }
}
start();

app.listen(PORT, () => {
  console.log(`Server kaykhddem f http://localhost:${PORT}`);
});