import { Container, Stack, Typography } from "@mui/material";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CarouselCard from "./components/CarouselCard";
import { Property } from "./ts/Property";
import Footer from "./components/Footer";

function App() {
  //converts json to objects
  let house = new Property("House 1", "Vodickova", 100000);
  let house2 = new Property("House 2", "Jeremiasova", 150000);
  let house3 = new Property("House 3", "Lidicka", 235000);
  let house4 = new Property("House 4", "Gercenova", 123000);

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
        />
        <Typography variant="h1">Prodej</Typography>
        <ListGroup
          items={[
            "Byty",
            "Rodinne Domy",
            "Rekreacni Objekty",
            "Komerecni",
            "Pozemky",
          ]}
        ></ListGroup>
        <Footer />
      </Stack>
    </Container>
  );
}

export default App;
