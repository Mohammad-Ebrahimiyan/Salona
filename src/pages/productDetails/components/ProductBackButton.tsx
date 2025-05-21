import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductBackButton({ fromPage }: { fromPage: number })  {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      sx={{ mb: 2, ml: 2 }}
      onClick={() => navigate(`/?page=${fromPage}`)}
    >
      back
    </Button>
  );
};
