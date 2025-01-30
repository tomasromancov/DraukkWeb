import { Box, Container, Stack } from "@mui/material";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Property } from "./ts/Property";
import Footer from "./components/Footer";
import house1Img from "/assets/house1.jpg";
import house2Img from "/assets/house2.webp";
import house3Img from "/assets/house3.jpg";
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
import { Realtor } from "./ts/Realtor";
import { useEffect, useState } from "react";
import googleBucket from "./ts/CloudImport";

function App() {
  const [properties, setProperties] = useState(null);
  const [realtors, setRealtors] = useState(null);

  //Fetch properties from google cloud
  useEffect(() => {
    fetch(
      `${googleBucket}/Data/Properties.json?timestamp=${new Date().getTime()}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.properties);
        //converts json to objects
        const propertyList = data.properties.map(
          (rawProp: {
            name: string;
            address: string;
            cost: number;
            thumbnail: string | undefined;
            images: string[] | undefined;
          }) =>
            new Property(
              rawProp.name,
              rawProp.address,
              rawProp.cost,
              rawProp.thumbnail,
              rawProp.images
            )
        );
        setProperties(propertyList);
      })
      .catch((error) => console.log(error));
  }, []);

  //Fetch realtors from google cloud
  useEffect(() => {
    fetch(
      `${googleBucket}/Data/Realtors.json?timestamp=${new Date().getTime()}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.realtors);
        //converts json to objects
        const realtorList = data.realtors.map(
          (rawRealtor: { name: string; email: string; phoneNumber: string }) =>
            new Realtor(
              rawRealtor.name,
              rawRealtor.email,
              rawRealtor.phoneNumber
            )
        );
        setRealtors(realtorList);
      })
      .catch((error) => console.log(error));
  }, []);

  let house = new Property("House 1", "Vodickova", 100000, house1Img, [
    house1Img,
    house2Img,
    house1Img,
    house3Img,
  ]);

  return (
    <Container>
      <Stack direction="column" sx={{ height: "100%", width: "100%" }}>
        <Navbar />
        {properties && (
          <Section title="Nabídka Nemovitostí">
            <HomeCarousel cards={properties} />
          </Section>
        )}

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

        {realtors && (
          <Section title={"Realitní Specialisté"}>
            <RealtorGalery cards={realtors} />
          </Section>
        )}

        <Footer />
      </Stack>
    </Container>
  );
}

export default App;
