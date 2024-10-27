import { Box, Container, Stack } from "@mui/material";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Property } from "./ts/Property";
import Footer from "./components/Footer";
import house1Img from "./assets/house1.jpg";
import house2Img from "./assets/house2.webp";
import house3Img from "./assets/house3.jpg";
import RealtorGalery from "./components/RealtorGalery";
import PropertyCarousel from "./components/PropertyCarousel";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HouseIcon from "@mui/icons-material/House";
import FenceIcon from "@mui/icons-material/Fence";
import DeckIcon from "@mui/icons-material/Deck";
import FactoryIcon from "@mui/icons-material/Factory";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Section from "./components/Section";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const fetchAPI = async () => {
    const response = await axios.get(
      "https://dufekweb-production.up.railway.app/api"
    );
    console.log(response.data.fruits);
  };

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch properties from your backend
    fetch("https://dufekweb-production.up.railway.app/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Use the properties data from the response
        setProperties(data.properties); // `data.properties` refers to the properties key in the response
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run this effect once when the component mounts
  console.log("Properties: " + properties);
  console.log("Loading: " + loading);
  console.log("Error: " + error);

  useEffect(() => {
    fetchAPI();
  }, []);

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
      <Stack direction="column" sx={{ height: "100%", width: "100%" }}>
        <Navbar />
        <Section title="Nově Přidané">
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
        </Section>

        <Section title={"Prodej"}>
          <Box sx={{ mx: "auto", my: "22px" }}>
            <ListGroup
              items={[
                "Byty",
                "Rodinné Domy",
                "Rekreační",
                "Komerční",
                "Činžové Domy",
                "Pozemky",
                "Ostatní",
              ]}
              icons={[
                ApartmentIcon,
                HouseIcon,
                DeckIcon,
                FactoryIcon,
                LocationCityIcon,
                FenceIcon,
                HomeWorkIcon,
              ]}
            />
          </Box>
        </Section>

        <Section title={"Dříve Prodané"}>
          <Box sx={{ width: "80%", mx: "auto", my: "22px" }}>
            <PropertyCarousel images={house.images!} />
          </Box>
        </Section>

        <Section title={"Makléři"}>
          <RealtorGalery />
        </Section>

        <Footer />
      </Stack>
    </Container>
  );
}

export default App;
