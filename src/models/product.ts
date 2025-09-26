// src/models/Product.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  inventory: number;
  images: string[];
  features: {
    [key: string]: string | number | boolean;
  };
  ratings: {
    average: number;
    count: number;
  };
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'clothing', 'books', 'home', 'other']
  },
  inStock: {
    type: Boolean,
    default: true
  },
  inventory: {
    type: Number,
    default: 0,
    min: 0
  },
  images: [String],
  features: {
    type: Map,
    of: Schema.Types.Mixed
  },
  ratings: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    count: { type: Number, default: 0, min: 0 }
  }
}, {
  timestamps: true
});

ProductSchema.index({ category: 1, price: 1 });
ProductSchema.index({ name: 'text', description: 'text' });

export const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);