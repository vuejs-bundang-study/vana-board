import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    content: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isChild: { type: Boolean, default: false },
    parent: { type: Schema.Types.ObjectId, ref: 'comment' },
    postId: { type: Schema.Types.ObjectId, ref: 'post' }
});

export const Comment = mongoose.model('comment', commentSchema);
