import { Stack, Typography, Box } from "@mui/material";

interface Props {
  items: String[];
}

function ListGroup({ items }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      {items.map((item, index) => (
        <Box
          sx={{
            backgroundColor: "red",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              border: "black 2px",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default ListGroup;
