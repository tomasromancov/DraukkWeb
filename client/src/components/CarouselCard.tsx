import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Property } from "../ts/Property";
import { Fragment, useEffect, useRef, useState } from "react";
import Popup from "./Popup";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Colors } from "../ts/Colors";
import SvgButton from "./SvgButton";
import PropertyCarousel from "./PropertyCarousel";
import PropertyInfo from "./PropertyInfo";
import blankProfile from "/assets/blankProfile.webp";
import googleBucket from "../ts/CloudImport";

interface Props {
  card: Property;
}

function CarouselCard({ card }: Props) {
  const [openPopupInfo, setOpenPopupInfo] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [contentHeight, setContentHeight] = useState("0px");

  const contentRef = useRef<HTMLDivElement | null>(null);

  // Fetch thumbnail from Google Cloud
  useEffect(() => {
    fetch(`${googleBucket}${card.thumbnail}?timestamp=${new Date().getTime()}`)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setThumbnail(imageUrl);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (moreInfo && contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight("0px");
    }
  }, [moreInfo]);

  const scrollToTop = () => {
    if (contentRef.current) {
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
          m: "22px",
          transition: "transform 0.3s ease-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        onClick={() => setOpenPopupInfo(true)}
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
            {thumbnail && (
              <img
                src={thumbnail}
                alt="card thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {card ? card.name : "house"}
          </Typography>
          <Typography>{card.address}</Typography>
          <Typography>{card.getCost()}</Typography>
        </Stack>
      </Paper>
      {/*Popup after clicking the carousel property card*/}
      {openPopupInfo && (
        <Popup
          title={
            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              {card ? card.name : "title"}
            </Typography>
          }
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
          <Stack
            direction={{ sm: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Stack
              direction="column"
              sx={{
                width: { sm: "100%", md: "35%" },
                my: "8px",
              }}
            >
              <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                Údaje
              </Typography>
              <PropertyInfo category="Adresa:" info={card.address} />
              <PropertyInfo category="Cena: " info={card.getCost()} />
              <Divider sx={{ backgroundColor: "#000000", my: "20px" }} />
              {/*Following info is generated using the property details array */}
              {card.propertyDetails?.map((detail, index) => (
                <PropertyInfo
                  key={index}
                  category={detail.title}
                  info={detail.value}
                />
              ))}
              {/* Box with additional info */}
              <Box
                sx={{
                  height: contentHeight,
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
                  width: { sm: "100%", md: "55%" },
                  marginTop: "8px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <PropertyCarousel cloud={true} images={card.images} />
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
