const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); //este middleware apunta a la carpeta public y lo convierte en el index de la app

hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => { //este es un servicio
    // let salida = {
    //         nombre: 'Jorge',
    //         edad: 32,
    //         url: req.url
    //     }
    //     // res.send('Hola Mundo')

    //renderiza el archivo home.hbs
    res.render('home', {
        nombre: 'Jorge Abimael'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hola Data')
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});