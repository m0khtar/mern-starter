import { Grid } from "@mui/material";
import ProductList from "../../components/products/ProductList";
import { useProducts } from "../../hooks/productHooks";
import ErrorComponent from "../../layout/ErrorComponent";
import LoadingComponent from "../../layout/LoadingComponent";

const ProductsPage = () => {
  const { data: products, isLoading, isError } = useProducts();

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={2}>
        filters
      </Grid>
      <Grid item xs={10}>
        {isLoading && <LoadingComponent />}
        {isError && <ErrorComponent />}
        {products && <ProductList products={products} />}
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
