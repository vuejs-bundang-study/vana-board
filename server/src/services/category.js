import { Category } from '../models/category';

export const getCategories = async () => {
    return Category.find();
};

export const createCategory = async (category) => {
    return Category.create(category);
};

export const deleteCategoryById = async (id) => {
    return Category.deleteOne({ _id: id});
};
