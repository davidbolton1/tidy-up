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

const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html');

app.use(express.static('public'));








server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})