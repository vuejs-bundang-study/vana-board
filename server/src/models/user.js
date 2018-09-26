import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    accountType: {
        type: String,
        enum: ['DEFAULT', 'KAKAO', 'NAVER', 'FACEBOOK', 'GOOGLE', 'GITHUB'],
        default: 'DEFAULT',
        uppercase: true,
        trim: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 6,
        maxlength: 20,
    },
    password: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        minlength: 2,
        maxlength: 12,
    },
    email: String,
    emailVerified: { type: Boolean, default: false },
    socialId: String,
    profileImage: String,
    role: {
        type: String,
        enum: ['ROLE_ADMIN', 'ROLE_USER'],
        default: 'ROLE_USER',
    },
    blocked: { type: Boolean, default: false },
    lastLogin: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('user', userSchema);
