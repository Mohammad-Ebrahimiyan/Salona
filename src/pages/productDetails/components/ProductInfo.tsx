import { useNavigate } from "react-router-dom";
import { Typography, Button, styled } from "@mui/material";
import { Product } from "../../../types/Product";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";
import { useCart } from "../../../context/useCart";

const TextColor = styled(Typography)({
  color: cssMainColors.price,
});

export default function ProductInfo({ product }: { product: Product }) {
   const { addToCart } = useCart();
  const navigate = useNavigate();

 const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");  
  };

  return (
    <>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {product.description}
      </Typography>
      <TextColor variant="h5" color="primary" fontWeight="bold" gutterBottom>
        ${product.price}
      </TextColor>
      <Typography variant="body2" gutterBottom>
        Category: {product.category}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Stock: {product.stock}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Rating: {product.rating}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Warranty: {product.warrantyInformation}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3, width: 180 }} onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </>
  );
}
