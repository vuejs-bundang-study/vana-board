import crypto from 'crypto';
import { User } from '../models/user';
import { config } from '../constants/config';

const { secret } = config.server;

export const createUser = ({ email, password, nickname, profileImage }) => {

    const encryptedPassword = crypto.createHmac('sha256', secret).update(password).digest('base64');

    return User.create({
        email,
        password: encryptedPassword,
        nickname,
        profileImage,
    });
};

export const createSocialUser = ({}) => {

};

export const findUser = (userInfo) => {

};

export const modifyUser = (userInfo) => {

};

export const removeUser = (userInfo) => {

};
