const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const server = http.createServer(app);

const homeRouter = require('./routers/home-router');

const port = 3000;
const host = 'localhost';

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use('/', homeRouter);

server.listen(port, host, () => {
	console.log(`Listening at http://${host}:${port}`);
});
