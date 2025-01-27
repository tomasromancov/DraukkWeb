import { Stack, Typography, Box, SvgIcon } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Colors } from "../ts/Colors";
import { ElementType } from "react";

interface Props {
  items: String[];
  icons?: ElementType[];
}

function ListGroup({ items, icons }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: { sm: "auto", md: "110px" },
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="space-between"
        sx={{ width: "100%", height: "100%" }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: Colors.red,
              width: "100%",
              py: { xs: "8px", sm: "8px", md: "0px" },
              alignContent: "center",
              ":hover": {
                backgroundColor: Colors.redHover,
              },
            }}
          >
            <Stack sx={{ height: "100%" }}>
              <Box
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column", // Stack items vertically
                  justifyContent: "center", // Center items vertically
                  alignItems: "center", // Center items horizontally
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {item}
                </Typography>
              </Box>
              {icons && (
                <Box
                  sx={{
                    height: "50%",
                    m: "auto",
                    display: "flex",
                    flexDirection: "column", // Stack items vertically
                    justifyContent: "center", // Center items vertically
                    alignItems: "center", // Center items horizontally
                  }}
                >
                  <SvgIcon
                    component={icons[index] ? icons[index] : ApartmentIcon}
                    sx={{ fill: "white", fontSize: "38px" }}
                  />
                </Box>
              )}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ListGroup;
