import express from 'express';
import { authenticate, createAccessToken, createRefreshToken } from '../services/auth';
import { authMiddleware } from '../middlewares/auth';

export const authRouter = express.Router();


/**
 * @api {post} /auth/login 1. 로그인(토큰 발급)
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam (Request Body) {String} email (필수) 이메일
 * @apiParam (Request Body) {String} password (필수) 비밀번호
 *
 * @apiSuccess {String} accessToken   API에 접근할 수 있는 권한을 가진 토큰(유효 기간 24시간)
 * @apiSuccess {String} refreshToken  accessToken을 갱신할 수 있는 권한을 가진 토큰(유효 기간 14일)
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M......",
 *       "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6......",
 *     }
 *
 * @apiError 404 계정이 존재하지 않을 때
 * @apiError 401 패스워드가 틀렸을 때
 *
 */
authRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    authenticate(email, password).then((result) => {
        res.json({
            success: true,
            ...result,
        });
    }).catch((error) => {
        res.status(error.status || 500).json({
            success: false,
            message: error.message,
        });
    });
});


authRouter.get('/verify', authMiddleware, (req, res) => {
    const { decoded } = req;
    if (decoded.sub === 'accessToken') {
        res.json({
            success: true,
            message: '유효한 토큰입니다.',
            ...decoded,
        });
    } else {
        res.status(400).json({
            success: false,
            message: 'Not an accessToken',
        });
    }
});

/**
 * @api {get} /auth/refresh 2. 토큰 갱신
 * @apiVersion 1.0.0
 * @apiName RefreshToken
 * @apiGroup Auth
 *
 * @apiHeader (Request Headers) {string} Authorization refreshToken 로그인할 과정에서 발급된 refreshToken을 Authorization 헤더에 담아서 요청
 * @apiHeaderExample {json} Request Header Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6......"
 *     }
 *
 * @apiSuccess {String} accessToken   API에 접근할 수 있는 권한을 가진 토큰(유효 기간 24시간)
 * @apiSuccess {String} refreshToken  accessToken을 갱신할 수 있는 권한을 가진 토큰(유효 기간 14일)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M......",
 *       "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6......",
 *     }
 *
 * @apiError 400 유효한 토큰이지만 리프레시 토큰이 아님
 * @apiError 401 토큰이 없거나 잘못된 토큰일 때
 * @apiError 403 토큰이 만료되었을 때
 *
 */
authRouter.get('/refresh', authMiddleware, (req, res) => {
    const { decoded } = req;
    if (decoded.sub === 'refreshToken') {
        res.json({
            success: true,
            accessToken: createAccessToken(decoded.user),
            refreshToken: createRefreshToken(decoded.user),
        });
    } else {
        res.status(400).json({
            success: false,
            message: 'Not a refreshToken',
        });
    }
});
