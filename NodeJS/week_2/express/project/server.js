import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
const app = express();

const PORT = process.env.PORT || 4000;

app.express.urlencoded()

app.use(express.static('public'));

const morgan = require('morgan')
app.use(morgan('dev'));


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
