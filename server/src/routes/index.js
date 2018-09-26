import express from 'express';
import cors from 'cors';
import { config } from '../constants/config';
import { sampleRouter } from './sample';
import { postRouter } from './post';
import { categoryRouter } from './category';
import { userRouter } from './user';

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
