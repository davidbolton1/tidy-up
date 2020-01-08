const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const PORT = 3000;

const morgan = require('morgan');
const logger = morgan('tiny')
app.use(logger);

const helmet = require('helmet')
app.use(helmet())

const bodyParser = require('body-parser')
const parseForm = bodyParser.urlencoded({
    extended: true
});

const { 
    stuff,
    users
} = require('./models')
// equivilent to 
// const models =require('./models)
//const stuff = models.stuff

app.get('/signup', (req, res) => {
    res.render('user-auth');
});

app.post('/signup', parseForm, (req, res) => {
    console.log(req.body)
})

const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hi')
});

app.get('/create', (req, res) => {
    console.log(stuff.all())
    res.render('form');
});

app.post('/create', parseForm, (req, res) => {
    console.log(req.body);
    const {name, givesJoy} = req.body;
    //const name = req.body.name;
    // const givesJoy = req.body.givesJoy
    //stuff.create(req.body.name, req.body.givesJoy)
    stuff.create(name, givesJoy)

    res.redirect('/create/success');
    // res.render('form');
});

app.get('/create/success', (req, res) => {
    console.log(stuff.all())
    res.send('success');
});






server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})