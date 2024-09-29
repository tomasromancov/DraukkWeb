import { Fragment } from "react";
import { Box, Stack, SvgIcon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles.css";
import Navbarimage from "../assets/navbarimage.jpg";
import SvgButton from "./SvgButton";
import { Colors } from "../ts/Colors";
import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  const navItems = new Map<string, string>([
    ["O FIRMĚ", "index.html"],
    ["NEMOVITOSTI", "nemovitosti.html"],
    ["VIDEOPROHLÍDKY", ""],
    ["NOVINKY", ""],
    ["REFERENCE", ""],
    ["PODMÍNKY", ""],
  ]);

  const openInstagram = () => {
    window.open("https://www.instagram.com/saintjavelin/");
  };

  return (
    <Fragment>
      <nav>
        {/*Navbar image div*/}
        <Box
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            height: 160,
            minWidth: 236,
          }}
        >
          <img
            src={Navbarimage}
            alt="Background Image"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
          {/* Text over navbar image */}
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#8a0707",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            garance - solidnost - jistota Váš partner již 30 let
          </Box>
          {/*Social media links */}
          <Box
            style={{
              position: "absolute",
              top: "10%",
              right: "2%",
              //transform: "translate(-50%, -50%)",
            }}
          >
            <Stack direction="row" spacing={1}>
              <SvgButton
                component={InstagramIcon}
                backgroundColor={Colors.red}
                hoverColor="white"
                svgColor="white"
                onClick={() => {
                  window.open("https://www.instagram.com/saintjavelin/");
                }}
              />
              <SvgButton
                component={FacebookIcon}
                backgroundColor={Colors.red}
                hoverColor="white"
                svgColor="white"
                onClick={openInstagram}
              />
            </Stack>
          </Box>
        </Box>
        {/* Navbar items generated using Navbar Map*/}
        <ul className="menulist">
          <li className="menulist">
            <a style={{ paddingBottom: "10px", paddingTop: "10px" }}>
              <SvgIcon
                component={HomeIcon}
                sx={{ fontSize: "32px", fill: "#FFFFFF" }}
              />
            </a>
          </li>
          {Array.from(navItems, ([item, link]) => (
            <li key={item} className="menulist">
              <a href={link}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/*End of navigation bar*/}
    </Fragment>
  );
}

export default Navbar;
