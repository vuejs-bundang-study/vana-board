import { Category } from '../models/category';

export const getCategories = async () => {
    return Category.find().populate('createdBy', 'nickname');
};

export const createCategory = async ({ name, createdBy }) => {
    return Category.create({ name, createdBy });
};

export const updateCategoryById = async (_id, { name }) => {
    return Category.update({ _id }, { $set: { name }});
};

export const deleteCategoryById = async (_id) => {
    return Category.deleteOne({ _id });
};
