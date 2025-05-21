import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import PaginationControls from "../../components/PaginationControls";
import { Product } from "../../types/Product";
import { Grid } from "@mui/material";
import ProductListSkeleton from "./components/ProductListSkeleton";
import ProductCard from "./components/ProductCard";

export default function ProductListPage() {
  const [searchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);

  const limit = 10;
  const skip = (page - 1) * limit;

  const { data, isLoading, error } = useProducts(limit, skip);

  if (isLoading) return <ProductListSkeleton />;
  if (error instanceof Error)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        Error: {error.message}
      </div>
    );

  return (
    <div>
      <Grid container spacing={2} sx={{ margin: "16px" }}>
        {data?.products.map((product: Product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <ProductCard product={product} page={page} />
          </Grid>
        ))}
      </Grid>
      <PaginationControls
        page={page}
        setPage={setPage}
        total={data?.total || 0}
        limit={limit}
      />
    </div>
  );
}
