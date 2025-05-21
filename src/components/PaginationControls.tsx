import { Button, Box } from "@mui/material";

interface PaginationControlsProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  limit: number;
}

export default function PaginationControls({
  page,
  setPage,
  total,
  limit,
}: PaginationControlsProps) {
  const totalPages = Math.ceil(total / limit);

  return (
    <Box  mb={8} display="flex" justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: 2 }}
        onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </Box>
  );
}

