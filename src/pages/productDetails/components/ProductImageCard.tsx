import { Card, CardMedia } from "@mui/material";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";

export default function ProductImageCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <Card sx={{ width: 320, boxShadow: 0 }}>
      <CardMedia
        component="img"
        height="320"
        sx={{
          objectFit: "contain",
          width: "100%",
          borderRadius: 2,
          background: cssMainColors.backgroundLight,
        }}
        image={image}
        alt={title}
      />
    </Card>
  );
}
