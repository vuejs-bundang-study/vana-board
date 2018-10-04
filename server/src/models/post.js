import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    categoryId: { type: Schema.Types.ObjectId, ref: 'category' }
    title: { type: String, default: '제목없음' },
    content: String,
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' }
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    viewCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
});


export const Post = mongoose.model('post', postSchema);
