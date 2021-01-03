require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const server = http.createServer(app);
const logger = morgan('tiny');

const port = 3000;
const host = 'localhost';

// routers
const homeRouter = require('./routers/frontend');

app.use(logger);

// HTML template engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// rendering frontend routers
app.use('/', homeRouter);

// rendering members routers

// rendering accounts routers

// rendering books routers

server.listen(port, host, () => {
	console.log(`Listening at http://${host}:${port}`);
});
