import { styled } from "@mui/material/styles";
import { Typography,Card } from "@mui/material";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";

export const StyledCard = styled("div")({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: cssMainColors.cardShadow,
  height: "100%",
  background: cssMainColors.cardBg,
  marginTop:'8px',
  "& .MuiCardMedia-root": {
    height: "200px",
    width: "100%",
    objectFit: "contain",
  },
});

export const StyledCardContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px",
  flexGrow: 1,
});

export const StyledTypographyTitle = styled(Typography)({
  fontSize: "16px",
  color: cssMainColors.textSecondary,
  fontWeight: 600,
  marginBottom: "8px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const StyledTypographyDescription = styled(Typography)({
  fontSize: "14px",
  color: "#666",
  marginBottom: "8px",
  flexGrow: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  WebkitBoxDecorationBreak: "clone",
});

export const StyledTypographyPrice = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  color: cssMainColors.price,
});

export const DiscountLabel = styled("div")({
  width: 38,
  height: 38,
  background: cssMainColors.discount,
  color: cssMainColors.cardBg,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 13,
  fontWeight: 700,
  boxShadow: "0 2px 8px rgba(255,82,82,0.15)",
  zIndex: 2,
  marginLeft:'8px',
  marginTop:'8px'
});

const hoverAnimation = {
  "&:hover": {
    transform: "scale(1.05)", 
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", 
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // انیمیشن سایه و مقیاس
  },
};

export const StyledProductCard = styled(Card)(() => ({
  borderRadius: "8px",
  overflow: "hidden",
  height: "100%",
  ...hoverAnimation, 
}));