import { styled } from "@mui/material/styles";
import {
  IconButton,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { StyledCard } from "../productList/components/ProductList.styles";

export const Container = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  background: cssMainColors.backG,
  padding: theme.spacing(2),
  maxWidth:1500,

}));

export const EmptyCartMessage = styled(Typography)(({ theme }) => ({
  color: cssMainColors.textSecondary,
  textAlign: "center",
  marginTop: theme.spacing(4),
}));



export const QuantityContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const QuantityButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
}));

export const ProductCardContainer = styled(StyledCard)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  height: "100%",
  "& .MuiCardMedia-root": {
    objectFit: "contain",
  },
}));

export const CardMediaStyled = styled(CardMedia)(() => ({
  objectFit: "contain",
}));

export const CardContentStyled = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const CardTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "18px",
}));

export const PriceText = styled(Typography)(() => ({
  color: cssMainColors.textSecondary,
  flexGrow: 1,
}));

export const QuantityDisplay = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  margin: theme.spacing(0, 2),
}));
