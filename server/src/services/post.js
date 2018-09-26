import { Post } from '../models/post';

export const getPostByCategory = async (category, page, perPage) => {
    let skip = (page - 1) * perPage;
    let limit = perPage / 1;
    return Post.find({ category: category }).sort({createdAt: -1}).skip(skip).limit(limit);
};

export const createPost = async (post) => {
    return Post.create(post);
};

export const deletePostById = async (id) => {
    return Post.deleteOne({ _id: id});
};

export const updatePostById = async (id, post) => {
    return Post.update({ _id : id}, { $set: post });
};
