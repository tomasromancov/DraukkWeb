import { Box, SvgIcon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import googleBucket from "../ts/CloudImport";

interface Props {
  images: string[] | null;
  cloud?: boolean; //decides if images are stored locally or in the cloud
}

function PropertyCarousel({ images, cloud = false }: Props) {
  const [srcImages, setSrcImages] = useState<string[] | null>(null);

  useEffect(() => {
    if (!cloud) {
      //use card images as path to local files
      setSrcImages(images);
    } else {
      // Fetch images from Google Cloud
      const fetchImages = async () => {
        try {
          if (!images) return;
          const imageUrls = await Promise.all(
            images.map(async (imagePath) => {
              const response = await fetch(
                `${googleBucket + imagePath}?timestamp=${new Date().getTime()}`
              );
              const blob = await response.blob();
              return URL.createObjectURL(blob);
            })
          );
          setSrcImages(imageUrls);
        } catch (error) {
          console.log(error);
        }
      };
      fetchImages();
    }
  }, []);

  return (
    <Splide
      hasTrack={false}
      aria-label="Splide Carousel"
      options={{ type: "loop", autoplay: true, interval: 4000 }}
    >
      <Box>
        <SplideTrack style={{ height: "100%" }}>
          {srcImages &&
            srcImages.map((image, index) => (
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
