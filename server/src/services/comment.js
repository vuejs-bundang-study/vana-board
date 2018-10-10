import { Comment } from '../models/comment';

export const getAllComments = async () => {
    return Comment.find({ isDeleted: false })
      .populate('user', 'nickname')
};

export const getCommentsOnPost = async (_id) => {
    return Comment.find({ _id, isDeleted: false })
      .populate('user', 'nickname')
};

export const createComment = async ({ createdBy, content, parent, post }) => {
    return Comment.create({ createdBy, content, parent, post})
};

export const updateComment = async (_id, { content }) => {
    return Comment.update({ _id }, { $set: { content, updatedAt: Date() }})
};

export const deleteComment = async (_id) => {
    return Comment.update({ _id }, { $set: { isDeleted: true }})
};
