// 📁 server.js
// hada lmain file li kaybda bih lserver

const express = require('express');
const morgan = require('morgan');
const todoRoutes = require('./routes/todoRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const authRoutes = require('./routes/auth.routes');
const connectDB = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

connectDB();

const app = express();
const PORT = 3000;

// باش نقدر نقرا body dyal POST sous format JSON
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));
app.use('/api/auth', authRoutes);



// logger bach n3rf ach kayt executa f chaque requete
app.use(morgan('dev'));

// les routes principales
app.use('/api/todos', todoRoutes);

// middleware global dyal les erreurs
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server kaykhddem f http://localhost:${PORT}`);
});
