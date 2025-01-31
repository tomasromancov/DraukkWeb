import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "@splidejs/react-splide/css";
import { Property } from "../ts/Property";
import { Box, SvgIcon } from "@mui/material";
import CarouselCard from "./CarouselCard";

interface Props {
  cards?: Property[];
}

function HomeCarousel({ cards }: Props) {
  return (
    <Splide
      hasTrack={false}
      aria-label="Splide Carousel"
      options={{
        type: "loop",
        perPage: 4,
        breakpoints: {
          860: {
            perPage: 3,
          },
          620: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      }}
    >
      {cards && (
        <Box>
          <SplideTrack style={{ height: "100%" }}>
            {cards.map((card, index) => (
              <SplideSlide
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CarouselCard key={card.name + index} card={card} />
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
      )}
    </Splide>
  );
}

export default HomeCarousel;
