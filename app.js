const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const mongoose = require('mongoose');

require('./src/config/config')

const publicDir = path.join(__dirname, './public');
const partials = path.join(__dirname, './templates/partials');
const viewsDir = path.join(__dirname, './templates/views/');
const nodeModulesDir = path.join(__dirname, 'node_modules');


/* hbs Configuration, it looks for files in views directory */
app.set('view engine', 'hbs');
app.set('views', viewsDir);
app.use(express.static(publicDir));
hbs.registerPartials(partials);
//const helpers = path.join(__dirname, 'helpers');
/* to use the images: */
app.use(express.static(path.join(publicDir, './assets')));


app.use(bodyParser.urlencoded({ extended: false }));

/* routes */
app.use(routes);

/* bootstrap */
app.use('/css', express.static(path.join(nodeModulesDir, '/bootstrap/dist/css')));
app.use('/js', express.static(path.join(nodeModulesDir, '/bootstrap/dist/js')));

/* Mongoose  */
mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});


