import mongoose from 'mongoose';

const { Schema } = mongoose;

const sampleScheme = new Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const Sample = mongoose.model('sample', sampleScheme);
