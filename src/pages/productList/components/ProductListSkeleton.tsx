import { Grid, Skeleton } from "@mui/material";
import { StyledCard, StyledCardContent } from "./ProductList.styles";

export default function ProductListSkeleton() {
  return (
    <Grid container spacing={2} sx={{ margin: "16px" }}>
      {Array.from(new Array(10)).map((_, idx) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
          <StyledCard style={{ position: "relative" }}>
            {idx < 6 && (
              <Skeleton
                variant="circular"
                width={38}
                height={38}
                sx={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}
              />
            )}
            <Skeleton variant="rectangular" width="100%" height={200} />
            <StyledCardContent>
              <Skeleton width="80%" height={32} />
              <Skeleton width="100%" height={24} />
              <Skeleton width="40%" height={28} />
            </StyledCardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
