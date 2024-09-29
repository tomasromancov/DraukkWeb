import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import house1 from "../assets/house1.jpg";
import { Property } from "../ts/Property";
import React, { Fragment, useRef } from "react";
import Popup from "./Popup";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Colors } from "../ts/Colors";
import SvgButton from "./SvgButton";
import PropertyCarousel from "./PropertyCarousel";
import PropertyInfo from "./PropertyInfo";
import blankProfile from "../assets/blankProfile.webp";

interface Props {
  card: Property;
}

function CarouselCard({ card }: Props) {
  const [openPopupInfo, setOpenPopupInfo] = React.useState(false);
  const [moreInfo, setMoreInfo] = React.useState(false);
  // const [cardHover, setCardHover] = React.useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (contentRef.current) {
      console.log("scrolling to top");
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  return (
    <Fragment>
      <Paper
        elevation={6}
        sx={{
          bgcolor: "#DDDDDD",
          borderRadius: "12px",
          width: "180px",
          height: "220px",
          "&:hover": {
            height: "241px",
            width: "201px",
          },
          transition: "width 0.3s ease-out, height 0.3s ease-out",
        }}
        onClick={() => setOpenPopupInfo(true)}
        // onMouseEnter={() => setCardHover(true)}
        // onMouseLeave={() => setCardHover(false)}
      >
        <Stack sx={{ height: "100%" }}>
          <Box
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              height: "50%",
              width: "88%",
              my: "8px",
              mx: "auto",
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
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              // fontSize: cardHover ? "21px" : "18px",
              // transition: "font-size 0.3s ease-out",
            }}
          >
            {card ? card.name : "house"}
          </Typography>
          <Typography
            sx={
              {
                // fontSize: cardHover ? "17px" : "14px",
                // transition: "font-size 0.3s ease-out",
              }
            }
          >
            {card.address}
          </Typography>
          <Typography
            sx={
              {
                // fontSize: cardHover ? "17px" : "14px",
                // transition: "font-size 0.3s ease-out",
              }
            }
          >
            {card.cost}kc
          </Typography>
        </Stack>
      </Paper>
      {openPopupInfo && (
        <Popup
          title={card ? card.name : "title"}
          openPopup={openPopupInfo}
          setOpenPopup={setOpenPopupInfo}
          fullWidth={true}
          dialogRef={contentRef}
          action={
            <Stack direction="row">
              <Stack direction="row">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography>Prohlídnout</Typography>
                </Box>
                <SvgButton
                  component={ArrowForwardIcon}
                  backgroundColor={Colors.red}
                  hoverColor="white"
                  svgColor="white"
                />
              </Stack>
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
              <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                Údaje
              </Typography>
              <PropertyInfo category="Adresa:" info={card.address} />
              <PropertyInfo category="Cena: " info={card.cost + "Kč"} />
              <Divider sx={{ backgroundColor: "#000000", my: "20px" }} />
              <PropertyInfo category="Plocha:" info="259 m^2" />
              <PropertyInfo category="Pokoje:" info="7" />
              <PropertyInfo category="Insulace:" info="Pěnová" />
              <PropertyInfo category="Balkón:" info="ano" />
              {/* Box with additional info */}
              <Box
                sx={{
                  height: moreInfo ? "100%" : "0px",
                  overflow: "hidden",
                  transition: "1s",
                }}
              >
                <Divider sx={{ backgroundColor: "#000000", my: "20px" }} />
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                  Makléř
                </Typography>
                <PropertyInfo category="Jméno:" info={"Jan Jedlička"} />
                <PropertyInfo
                  category="Email:"
                  info={"jan.jedlička@gmail.com"}
                />
                <PropertyInfo category="Telefon:" info={"665 190 695"} />
                <Box
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{
                    height: "50%",
                    width: "50%",
                    my: "8px",
                    mx: "auto",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={blankProfile}
                    alt="profile picture"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>

              {/* Expand button for more information */}
              <Stack direction="column" alignItems="center" spacing={1}>
                <Typography>
                  {moreInfo ? "Zobrazit méně" : "Zobrazit více"}
                </Typography>
                <SvgButton
                  component={moreInfo ? ArrowUpwardIcon : ArrowDownwardIcon}
                  backgroundColor={Colors.red}
                  hoverColor="white"
                  svgColor="white"
                  onClick={() => {
                    setMoreInfo(!moreInfo);
                    if (moreInfo) {
                      scrollToTop();
                    }
                  }}
                  resetOnClick={true}
                />
              </Stack>
            </Stack>
            {/*If property has any associated images display them in a carousel,
            otherwise display the thumbnail only. */}
            {card.images ? (
              <Box
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                  width: "55%",
                  marginTop: "8px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <PropertyCarousel images={card.images} />
              </Box>
            ) : (
              <Box
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                  height: "50%",
                  width: "55%",
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
            )}
          </Stack>
        </Popup>
      )}
    </Fragment>
  );
}

export default CarouselCard;
