import { Box, SvgIcon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Colors } from "../ts/Colors.ts";

interface Props {
  images: string[];
}

function PropertyCarousel({ images }: Props) {
  return (
    <Splide aria-labell="Splide Carousel" options={{ rewind: true }}>
      {images.map((image, index) => (
        <SplideSlide>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#000000",
            }}
          >
            <img
              key={index}
              src={image}
              alt={"Image " + index}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default PropertyCarousel;
