import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import "../index.css"; // Import custom CSS
import CarouselCard from "./CarouselCard";
import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Property } from "../ts/Property";

interface Props {
  cards: Property[];
  title?: string;
}

function sortCards(cards: Property[]) {
  // Screen resizing has an ERROR: Scaling down (making the window size larger)
  // deletes the slides at the end of the carousel making the rest of the carousel inaccesible

  // State to hold the number of cards to display
  const [cardsPerPage, setCardsPerPage] = useState<number>(4);
  // Update the number of cards based on screen width
  const updateCardsPerPage = () => {
    if (window.innerWidth < 768) {
      setCardsPerPage(2); // Extra Small screens show 3 cards
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(3); // Small screens show 2 cards
    } else {
      setCardsPerPage(4); // Larger screens show 4 cards
    }
  };

  // Add an event listener on window resize
  useEffect(() => {
    updateCardsPerPage(); // Set the initial value based on screen width

    window.addEventListener("resize", updateCardsPerPage); // Add listener for resize

    return () => window.removeEventListener("resize", updateCardsPerPage); // Cleanup
  }, []);

  let sortedCards: Property[][] = [];
  let cardCounter = 0;

  //each 4 cards are sorted into a single list
  cards.forEach((card, index) => {
    if (index % cardsPerPage == 0) {
      sortedCards[cardCounter] = [];
      cardCounter++;
    }
    sortedCards[cardCounter - 1].push(card);
  });

  return sortedCards;
}

function Carousel({ cards, title }: Props) {
  return (
    <>
      {title && (
        <Box
          sx={{
            paddingTop: "20px",
          }}
        >
          <Typography sx={{ fontSize: "36px" }}>{title}</Typography>
        </Box>
      )}
      {/*bootstrap carousel*/}
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ height: "300px" }}
      >
        <div
          className="carousel-inner"
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/**Cards are sorted into lists where each list will get displayed at a time in a single carousel slide */}
          {sortCards(cards).map((cardList, index) => (
            <Box
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              sx={{ width: "100%" }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  width: "80%",
                  height: "100%",
                  py: "30px",
                  margin: "auto",
                }}
              >
                {}
                {cardList.map((card) => (
                  <CarouselCard key={card.name + index} card={card} />
                ))}
              </Stack>
            </Box>
          ))}
        </div>

        {/*Button for moving to the previous carousel slide */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <SvgIcon
            sx={{ fontSize: "40px", fill: "#000000" }}
            component={NavigateBeforeIcon}
          ></SvgIcon>
        </button>

        {/*Button for moving to the next carousel slide */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <SvgIcon
            sx={{ fontSize: "40px", fill: "#000000" }}
            component={NavigateNextIcon}
          ></SvgIcon>
        </button>
      </div>
    </>
  );
}
export default Carousel;
