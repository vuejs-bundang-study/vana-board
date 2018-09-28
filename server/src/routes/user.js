import express from 'express';
import { createUser } from '../services/user';

export const userRouter = express.Router();

userRouter.post('/', (req, res) => {
    const { email, password, nickname, profileImage } = req.body;
    createUser({ email, password, nickname, profileImage })
        .then((user) => {
            const { _id, email } = user;
            return res.json({
                _id,
                email,
            });
        })
        .catch((error) => {
            switch (error.code) {
                case 11000: {
                    return res.status(409).json('이미 가입된 이메일입니다.');
                }
                default:
                    console.log(error);
                    return res.status(500).json('서비스에 문제가 발생했습니다.');
            }
        });
});

userRouter.post('/social', (req, res) => {

});

userRouter.get('/', (req, res) => {

});

userRouter.put('/', (req, res) => {

});

userRouter.delete('/', (req, res) => {

});
