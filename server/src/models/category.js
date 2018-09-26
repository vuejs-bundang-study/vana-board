import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
    urlName: String,
    displayName: String,
    createdBy: String,
    createdAt: { type: Date, default: Date.now },
    // largeCategory: String,
    // mediumCategory: String,
    // smallCategory: String
});


export const Category = mongoose.model('category', categorySchema);
