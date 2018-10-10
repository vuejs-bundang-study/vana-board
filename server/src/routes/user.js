import express from 'express';
import { createUser } from '../services/user';

export const userRouter = express.Router();

/**
 * @api {post} /v1/users 1. 회원가입
 * @apiVersion 1.0.0
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam (Request Body) {String} email (필수) 이메일
 * @apiParam (Request Body) {String} password (필수) 비밀번호
 * @apiParam (Request Body) {String} nickname 닉네임
 * @apiParam (Request Body) {String} profileImage 프로필 이미지 원본 경로
 *
 * @apiSuccess {String} _id  유저 키
 * @apiSuccess {String} email  가입된 유저의 계정 이메일
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": 1
 *       "email": "myemail@manku.kr",
 *     }
 *
 * @apiError 400 필수 값이 없거나 올바르지 않은 포맷의 요청
 * @apiError 409 이미 존재하는 이메일
 *
 */
userRouter.post('/', (req, res) => {
    const { email, password, nickname, profileImage } = req.body;
    const emailRegex = /.+@.+\..+/gi;
    const passwordRegex = /(.+){6,20}/gi;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: '이메일의 형식이 올바르지 않습니다.',
        });
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            success: false,
            message: '패스워드의 형식이 올바르지 않습니다.',
        });
    }

    createUser({ email, password, nickname, profileImage })
        .then((user) => {
            const { _id, email } = user;
            return res.json({
                success: true,
                user: {
                    _id,
                    email,
                },
            });
        })
        .catch((error) => {
            switch (error.code) {
                case 11000: {
                    return res.status(409).json({
                        success: false,
                        message: '이미 가입된 이메일입니다.',
                    });
                }
                default:
                    console.log(error);
                    return res.status(500).json({
                        success: false,
                        message: '서비스에 문제가 발생했습니다.',
                    });
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
