import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    createdBy: Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now }
});


export const Category = mongoose.model('category', categorySchema);
