import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { config } from '../constants/config';

const { secret } = config.server;

export const createAccessToken = (userId) => {
    return jwt.sign({
            user: userId,
        },
        secret,
        {
            expiresIn: '1d',
            issuer: 'daniel.hs',
            subject: 'accessToken',
        },
    );
};

export const createRefreshToken = (userId) => {
    return jwt.sign({
            user: userId,
        },
        secret,
        {
            expiresIn: '14d',
            issuer: 'daniel.hs',
            subject: 'refreshToken',
        });
};

export const authenticate = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        const userNotFountException = new Error('사용자를 찾을 수 없습니다.');
        userNotFountException.status = 404;
        throw userNotFountException;
    }

    const encryptedPassword = crypto.createHmac('sha256', secret).update(password).digest('base64');

    if (user.password !== encryptedPassword) {
        const passwordNotMatchedException = new Error('패스워드가 일치하지 않습니다.');
        passwordNotMatchedException.status = 401;
        throw passwordNotMatchedException;
    }

    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    return {
        accessToken,
        refreshToken,
    };
};
