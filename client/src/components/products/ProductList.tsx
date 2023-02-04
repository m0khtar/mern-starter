import ProductListItem from "./ProductListItem";
import Grid from "@mui/material/Grid";
import { Product } from "../../models/product";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Grid container spacing={6}>
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductListItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
