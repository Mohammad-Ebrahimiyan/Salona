import { CardMedia } from "@mui/material";
import { Product } from "../../types/Product";
import { ProductCardContainer, CardContentStyled, CardTitle, PriceText, QuantityDisplay, QuantityContainer, QuantityButton } from "./cart.styles";

interface ProductCardProps {
  product: Product;
  quantity: number;
  updateQuantity: (productId: number, quantity: number) => void;
}

export default function ProductCard({
  product,
  quantity,
  updateQuantity,
}: ProductCardProps) {
  return (
    <ProductCardContainer>
      <CardMedia
        component="img"
        height="250"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContentStyled>
        <CardTitle variant="h6">{product.title}</CardTitle>
        <PriceText variant="body2">${product.price}</PriceText>
        <QuantityContainer>
          <QuantityButton
            disabled={quantity <= 1}
            onClick={() => updateQuantity(product.id, quantity - 1)}
          >
            -
          </QuantityButton>
          <QuantityDisplay variant="body2">{quantity}</QuantityDisplay>
          <QuantityButton
            disabled={quantity >= product.stock}
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            +
          </QuantityButton>
        </QuantityContainer>
      </CardContentStyled>
    </ProductCardContainer>
  );
}
