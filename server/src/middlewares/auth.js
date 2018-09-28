import jwt from 'jsonwebtoken';
import { config } from '../constants/config';

const { secret } = config.server;

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'] || req.headers['x-access-token'] || req.query.token;

    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Access token not exist',
        });
    }

    const decode = new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) reject(err);
            resolve(decoded);
        });
    });

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message,
        });
    };

    decode.then((decoded) => {
        req.decoded = decoded;
        next();
    }).catch(onError);

};
