import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    content: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isChild: { type: Boolean, default: false },
    parent: { type: Schema.Types.ObjectId, ref: 'comment' },
    post: { type: Schema.Types.ObjectId, required: true, ref: 'post' }
});

export const Comment = mongoose.model('comment', commentSchema);
