import { Product } from "../models/product";
import { requests } from "./generic-requests";

const path = "/products";

export const Products = {
  list: () => requests.get<Product[]>(path),
  details: (id: string) => requests.get<Product>(`${path}/${id}`),
  create: (product: Product) => requests.post<void>(path, product),
  update: (product: Product) =>
    requests.put<void>(`${path}/${product.id}`, product),
  delete: (id: string) => requests.delete<void>(`${path}/${id}`),
};
