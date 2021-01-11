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
const frontendRouter = require('./routers/frontend');
const memberRouter = require('./routers/member');
const userRouter = require('./routers/user');

app.use(logger);

// HTML template engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// rendering frontend routers
app.use('/', frontendRouter);

// rendering member activity routers
app.use('/', memberRouter);

// rendering user-account activity routers
app.use('/', userRouter);

server.listen(port, host, () => {
	console.log(`Listening at http://${host}:${port}`);
});
