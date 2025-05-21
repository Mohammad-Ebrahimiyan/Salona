import { useParams, useLocation } from "react-router-dom";
import  useProducts  from "../../hooks/useProducts";
import { CircularProgress, Typography, Grid, Grow } from "@mui/material";
import { Product } from "../../types/Product";
import ProductImageCard from "./components/ProductImageCard";
import ProductInfo from "./components/ProductInfo";
import ProductBackButton from "./components/ProductBackButton";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

export default function ProductDetailsPage () {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading, error } = useProducts(0, 0);
  const location = useLocation();
  const fromPage = location.state?.fromPage || 1;

  const product = data?.products.find((p: Product) => p.id.toString() === productId);

  if (isLoading)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          fetching...
        </Typography>
      </div>
    );
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: cssMainColors.backG,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: 900,
          background: cssMainColors.cardBg,
          borderRadius: 3,
          boxShadow: 3,
          p: 4,
          alignItems: "center",
        }}
      >
        <Grow in={true} timeout={700}>
          <Grid size={{xs:12, sm:6}} sx={{ display: "flex", justifyContent: "center" }}>
            <ProductImageCard image={product.images[0]} title={product.title} />
          </Grid>
        </Grow>
        <Grow in={true} timeout={1200}>
          <Grid size={{xs:12, sm:6}}>
            <ProductInfo product={product} />
          </Grid>
        </Grow>
        <Grow in={true} timeout={1600}>
          <Grid size={{xs:12}}>
            <ProductBackButton fromPage={fromPage} />
          </Grid>
        </Grow>
      </Grid>
    </div>
  );
};
