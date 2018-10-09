import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});


export const Category = mongoose.model('category', categorySchema);
