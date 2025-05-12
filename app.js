const express = require('express');
const morgan = require('morgan');
const connectDB = require('./db/mongodb');
require('dotenv').config();
const methodOverride = require('method-override');
const bookRoutes = require('./routes/my_routes');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(expressLayouts)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Conexion
connectDB();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('layout', 'layouts/main'); 

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/books', bookRoutes);

app.listen(port, () => {
    console.log(`Servidor en: http://localhost:${port}`);
});
