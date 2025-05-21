import { useCart } from "../../context/useCart";
import {  Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/Product";
import { Container, EmptyCartMessage } from "./cart.styles";
import ProductCard from "./ProductCard";

export default function CartPage() {
  const { cart, updateQuantity } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Container>
        <EmptyCartMessage variant="h6">Your cart is empty!</EmptyCartMessage>
        <Box textAlign='center'>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => navigate("/")}
        >
          Go Back to Products
        </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }} textAlign='center'>
        Your Cart
      </Typography>
      <Grid container spacing={4} >
        {cart.map(
          ({ product, quantity }: { product: Product; quantity: number }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <ProductCard
                product={product}
                quantity={quantity}
                updateQuantity={updateQuantity}
              />
            </Grid>
          )
        )}
      </Grid>
     
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, }}
        onClick={() => navigate("/")}
      >
        Go Back to Products
      </Button>
    </Container>
  );
}
