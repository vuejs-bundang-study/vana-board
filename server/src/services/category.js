import { Category } from '../models/category';

export const getCategories = async () => {
    return Category.find().populate('createdBy', 'nickname');
    //return Category.find();
};

export const createCategory = async ({ name, createdBy }) => {
    console.log('name : ', name, ' createdBy : ', createdBy);
    return Category.create({ name, createdBy });
};

export const deleteCategoryById = async (_id) => {
    return Category.deleteOne({ _id });
};
