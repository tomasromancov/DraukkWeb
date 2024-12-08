import { Box, SvgIcon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface Props {
  images: string[];
}

function PropertyCarousel({ images }: Props) {
  return (
    <Splide
      hasTrack={false}
      aria-label="Splide Carousel"
      options={{ type: "loop", autoplay: true, interval: 4000 }}
    >
      <Box>
        <SplideTrack style={{ height: "100%" }}>
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <img
                  key={index}
                  src={image}
                  alt={"Image " + index}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </SplideSlide>
          ))}
        </SplideTrack>
        {/* Custom arrows for the carousel.
          Splide flips the prev arrow around so the same 
          icon can be used for prev and next.
        */}
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <SvgIcon
              sx={{ fontSize: "large", fill: "#000000" }}
              component={NavigateNextIcon}
            />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <SvgIcon
              sx={{ fontSize: "large", fill: "#000000" }}
              component={NavigateNextIcon}
            />
          </button>
        </div>
      </Box>
    </Splide>
  );
}

export default PropertyCarousel;
