/* =========================================
 Load dependencies
 ============================================*/
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import routes from './routes';
import { config } from './constants/config';
import { logRoot, publicRoot } from './constants/path';
import { logger } from './utils/logger';

/* =========================================
 Express Configuration
 ============================================*/
const app = express();
const port = config.server.port || 8080;

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// access log setting
fs.existsSync(logRoot) || fs.mkdirSync(logRoot);
const accessLogStream = fs.createWriteStream(path.join(logRoot, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));

// open the server
app.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
});

// set public path
fs.existsSync(publicRoot) || fs.mkdirSync(publicRoot);
app.use('/', express.static(path.join(__dirname, './../public')));

// set api router
app.use('/', routes);

/* handle error */
app.use(function (err, req, res, next) {
    if (err) {
        logger.error(err);
    }
    res.status(500).send('서비스에 문제가 발생했습니다. 잠시 후에 다시 시도해주세요.');
});

mongoose.set('useCreateIndex', true);
mongoose.connect(config.mongodb.url, { useNewUrlParser: true })
    .then(() => {
        console.log(`MongoDB connected -> ${config.mongodb.url}`);
    })
    .catch(console.error);

// git Hello World
