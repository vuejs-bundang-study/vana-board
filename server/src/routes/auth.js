import express from 'express';
import { authenticate, createAccessToken, createRefreshToken } from '../services/auth';
import { authMiddleware } from '../middlewares/auth';

export const authRouter = express.Router();

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

authRouter.post('/refresh', authMiddleware, (req, res) => {
    const { decoded } = req;
    if (decoded.sub === 'refreshToken') {
        res.json({
            success: true,
            message: '유효한 토큰입니다.',
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
