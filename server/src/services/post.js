import { Post } from '../models/post';

export const getPostByCategory = async (category, page, perPage) => {
    let skip = (page - 1) * perPage;
    let limit = perPage / 1;
    return Post.find({ category, isDeleted: false })
        .sort({ createdAt: -1 })
        .skip(skip).limit(limit)
        .populate('createdBy', 'nickname')
        .populate('category', 'name');
};

export const createPost = async ({ category, title, content, createdBy }) => {
    return Post.create({ category, title, content, createdBy });
};

export const updatePostById = async (_id, { category, title, content, createdBy }) => {
    return Post.update({ _id }, { $set: { category, title, content, createdBy, updatedAt: Date() } });
};

export const deletePostById = async (_id) => {
  return Post.update({ _id }, { $set: { isDeleted: true } });
};
