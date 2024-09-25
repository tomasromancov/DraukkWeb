import { Stack, Typography, Box } from "@mui/material";
import { Colors } from "../ts/Colors";

interface Props {
  items: String[];
}

function ListGroup({ items }: Props) {
  return (
    <Box
      sx={{
        width: "100 %",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: Colors.red,
              width: "100%",
              height: "60px",
              border: "solid 1px black",
              alignContent: "center",
              ":hover": {
                backgroundColor: Colors.redHover,
              },
            }}
          >
            <Typography
              sx={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                color: "white",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ListGroup;
