import express from 'express';
import cors from 'cors';
import { sampleRouter } from './sample';
<<<<<<< HEAD

<<<<<<<
HEAD;
import { postRouter } from './post';
import { categoryRouter } from './category';

======
=
import { userRouter } from './user';

>>>>>>>
User;
Model;
정의, router, service;
구조;
잡음.
=======
import { userRouter } from './user';
>>>>>>> origin/feature/5
import { config } from '../constants/config';

const router = express.Router();

const { cors_whitelist } = config.server;
const whitelist = Array.isArray(cors_whitelist) ? cors_whitelist : [];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

router.use('*', cors(corsOptionsDelegate));

router.get('/', (req, res) => {
    res.json('Hello!');
});

router.use('/sample', sampleRouter);
router.use('/post', postRouter);
router.use('/category', categoryRouter);
router.use('/user', userRouter);

export default router;
