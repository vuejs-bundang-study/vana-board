import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    content: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isChild: { type: Boolean, default: false },
    parent: { type: Schema.Types.ObjectId },
    post: { type: Schema.Types.ObjectId, required: true },
    isDeleted: { type: Boolean, default: false }
});

export const Comment = mongoose.model('comment', commentSchema);
