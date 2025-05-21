import { Link } from "react-router-dom";
import {
  StyledCard,
  StyledCardContent,
  StyledTypographyTitle,
  StyledTypographyDescription,
  StyledTypographyPrice,
  DiscountLabel,
  StyledProductCard,
} from "./ProductList.styles";
import { Product } from "../../../types/Product";
import { CardMedia } from "@mui/material";

interface ProductCardProps {
  product: Product;
  page: number;
}

export default function ProductCardProps({ product, page }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none" }}
      state={{ fromPage: page }}
    >
      <StyledProductCard>
      <StyledCard>
        {product.discountPercentage > 0 && (
          <DiscountLabel>
            %{product.discountPercentage.toFixed(0)}
          </DiscountLabel>
        )}
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
        />
        <StyledCardContent>
          <StyledTypographyTitle variant="h6">
            {product.title}
          </StyledTypographyTitle>
          <StyledTypographyDescription variant="body2">
            {product.description}
          </StyledTypographyDescription>
          <StyledTypographyPrice variant="body1">
            ${product.price}
          </StyledTypographyPrice>
        </StyledCardContent>
      </StyledCard>
      </StyledProductCard>
    </Link>
  );
}
