// src/models/Product.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  productImages: string[];
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  productImages: [String],
}, {
  timestamps: true
});

ProductSchema.index({ price: 1 });
ProductSchema.index({ name: 'text' });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);