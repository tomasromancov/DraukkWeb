import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import house1 from "../assets/house1.jpg";
import { Property } from "../ts/Property";
import React, { Fragment } from "react";
import Popup from "./Popup";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Colors } from "../ts/Colors";
import SvgButton from "./SvgButton";

interface Props {
  card: Property;
}

function CarouselCard({ card }: Props) {
  const [openPopupInfo, setOpenPopupInfo] = React.useState(false);

  return (
    <Fragment>
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
          },
          transition: "width 0.3s ease-out, height 0.3s ease-out",
        }}
        onClick={() => setOpenPopupInfo(true)}
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
                src={card.thumbnail}
                alt="card thumbnail"
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
          <Typography>{card.address}</Typography>
          <Typography>{card.cost}kc</Typography>
        </Stack>
      </Paper>
      {openPopupInfo && (
        <Popup
          title={card ? card.name : "title"}
          openPopup={openPopupInfo}
          setOpenPopup={setOpenPopupInfo}
          fullWidth={true}
          action={
            <Stack direction="row">
              <SvgButton
                component={InstagramIcon}
                backgroundColor={Colors.red}
                hoverColor="white"
                svgColor="white"
                onClick={() => {
                  window.open("https://www.instagram.com/saintjavelin/");
                }}
              />
            </Stack>
          }
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="column"
              sx={{
                width: "35%",
                my: "8px",
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Typography>{"Address: "}</Typography>
                <Typography>{card.address}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>{"Price: "}</Typography>
                <Typography>{card.cost + " Kč"}</Typography>
              </Stack>
              <Divider sx={{ backgroundColor: "#000000", my: "20px" }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography>{"Area: "}</Typography>
                <Typography>{"259 m^2"}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>{"Rooms: "}</Typography>
                <Typography>{"7"}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>{"Insulation: "}</Typography>
                <Typography>{"Foam"}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>{"Balkony: "}</Typography>
                <Typography>{"No"}</Typography>
              </Stack>
              <Divider sx={{ backgroundColor: "#000000", my: "20px" }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography>{"Makler: "}</Typography>
                <Typography>{"Jan Jedlicka"}</Typography>
              </Stack>
            </Stack>
            <Box
              justifyContent="flex-start"
              alignItems="center"
              sx={{
                height: "50%",
                width: "60%",
                my: "8px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={card.thumbnail}
                alt="card thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
        </Popup>
      )}
    </Fragment>
  );
}

export default CarouselCard;
