import { Box, Container, Stack, Typography } from "@mui/material";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CarouselCard from "./components/CarouselCard";
import { Property } from "./ts/Property";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import house1Img from "./assets/house1.jpg";
import house2Img from "./assets/house2.webp";
import house3Img from "./assets/house3.jpg";

function App() {
  //converts json to objects
  let house = new Property("House 1", "Vodickova", 100000, house1Img, [
    house1Img,
    house2Img,
    house1Img,
    house3Img,
  ]);
  let house2 = new Property("House 2", "Jeremiasova", 150000, house2Img);
  let house3 = new Property("House 3", "Lidicka", 235000, house1Img);
  let house4 = new Property("House 4", "Gercenova", 123000, house3Img);

  return (
    <Container>
      <Stack direction="column" height="100%" width="100%">
        <Navbar />
        <Carousel
          cards={[
            house,
            house2,
            house3,
            house4,
            house,
            house2,
            house3,
            house4,
            house,
            house2,
            house3,
            house4,
            house,
            house2,
            house3,
            house4,
          ]}
          title="Nově Přidané"
        />
        <Typography sx={{ fontSize: "36px" }}>Prodej</Typography>
        <Box sx={{ mx: "auto", my: "22px", width: "80%" }}>
          <ListGroup
            items={[
              "Byty",
              "Rodinne Domy",
              "Rekreacni Objekty",
              "Komerecni",
              "Pozemky",
            ]}
          />
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
}

export default App;
