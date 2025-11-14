import express  from 'express';
import authRoute from './routes/auth.routes.js';
import dotenv from 'dotenv';
import connectToDatabase from './config/database.js'
dotenv.config();
// const productsRouter = require('./routes/products.routes');
// const ordersRouter = require('./routes/orders.routes');
// const logger = require('./middlewares/logger');
// const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
// app.use(logger);
// app.use('/api/products', productsRouter);
// app.use('/api/orders', ordersRouter);
// app.get('/health', (req, res) => {
//   res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
// });

app.use('/api/auth', authRoute);


// app.use(errorHandler);


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
  try {
    // 1. Connexion à MongoDB
    await connectToDatabase(MONGO_URI);

  } catch (err) {
    console.error('Échec du démarrage de l’application :', err.message);
    process.exit(1);
  }
}
start();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})