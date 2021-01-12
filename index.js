require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const server = http.createServer(app);
const logger = morgan('tiny');

const port = 3003;
const host = 'localhost';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// routers
const frontendRouter = require('./routers/frontend');
const memberRouter = require('./routers/member');
const userRouter = require('./routers/user');

app.use(logger);

app.use(express.urlencoded({ extended: true }));

// HTML template engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(
	session({
		store: new FileStore(), // no options for now
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: true,
		rolling: true,
		//maxAge: 1000 * 60 * 60 * 24 * 7,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	})
);

// rendering frontend routers
app.use('/', frontendRouter);

// rendering member activity routers
app.use('/member', memberRouter);

// rendering user-account activity routers
app.use('/user', userRouter);

server.listen(port, host, () => {
	console.log(`Listening at http://${host}:${port}`);
});
