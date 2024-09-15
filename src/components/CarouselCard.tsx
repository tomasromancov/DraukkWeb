import { Box, Paper, Stack, Typography } from "@mui/material";
import house1 from "../assets/house1.jpg";
import { Property } from "../ts/property";

interface Props {
  card?: Property;
}

function CarouselCard({ card }: Props) {
  return (
    <Paper
      elevation={6}
      sx={{
        bgcolor: "#DDDDDD",
        borderRadius: "12px",
        width: "180px",
        height: "200px",
        "&:hover": {
          height: "220px",
          width: "198px",
          "& .text": { color: "white" },
        },
        transition: "width 0.3s ease-out, height 0.3s ease-out",
      }}
    >
      <Stack>
        <Box
          sx={{
            display: "flex", // Flexbox to center the Box
            justifyContent: "center", // Horizontally center the image Box
          }}
        >
          <Box
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              height: "50%",
              width: "88%",
              my: "8px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src={house1}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {card ? card.name : "house"}
        </Typography>
        <Typography>{card ? card.address : "address"}</Typography>
        <Typography>{card ? card.cost : "100000"}kc</Typography>
      </Stack>
    </Paper>
  );
}

export default CarouselCard;
