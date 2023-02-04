import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../common/errors/not-found-error";
import { Product } from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.send(products);
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
  } catch (error) {
    return next(error);
  }

  if (!product) {
    const error = new NotFoundError();
    return next(error);
  }

  res.send(product.toObject({ getters: true }));
};
