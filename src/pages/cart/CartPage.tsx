// src/pages/Cart/CartPage.tsx
import { useCart } from "../../context/useCart";

import {
  Button,
  Typography,
  Grid,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/Product";
import { StyledCard } from "../productList/components/ProductList.styles";

export default function CartPage() {
  const { cart, updateQuantity } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
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
        <Typography variant="h6" style={{ color: cssMainColors.textSecondary }}>
          Your cart is empty!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => navigate("/")}
        >
          Go Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: cssMainColors.backG,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Your Cart
      </Typography>
      <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
        {cart.map(
          ({ product, quantity }: { product: Product; quantity: number }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <StyledCard sx={{ boxShadow: 3, height: "100%" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.thumbnail}
                  alt={product.title}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontSize: "18px" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ flexGrow: 1 }}
                  >
                    ${product.price}
                  </Typography>
                  <div>
                    <IconButton
                      disabled={quantity <= 1}
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                    >
                      -
                    </IconButton>
                    <Typography
                      variant="body2"
                      sx={{ display: "inline-block", mx: 2 }}
                    >
                      {quantity}
                    </Typography>
                    <IconButton
                      disabled={quantity >= product.stock}
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      +
                    </IconButton>
                  </div>
                </CardContent>
              </StyledCard>
            </Grid>
          )
        )}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        Go Back to Products
      </Button>
    </div>
  );
}
