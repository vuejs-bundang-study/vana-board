import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    category: { type: Schema.Types.ObjectId, required: true, ref: 'category' },
    title: { type: String, default: '제목없음' },
    content: { type: String },
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    viewCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
});


export const Post = mongoose.model('post', postSchema);
