import { Model, Schema, model } from "mongoose";

interface IProduct {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

// Create a new Model type that knows about IUserMethods...
type ProductModel = Model<IProduct>;

// Define a schema
const productSchema = new Schema<IProduct, ProductModel>(
  {
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: { rate: Number, count: Number },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Product = model("Product", productSchema);
export { Product, IProduct };
