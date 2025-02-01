import { Fragment } from "react";
import { Box, Stack, SvgIcon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles.css";
import Navbarimage from "/assets/navbarimage4.jpg";
import SvgButton from "./SvgButton";
import { Colors } from "../ts/Colors";
import HomeIcon from "@mui/icons-material/Home";
import navItems from "../ts/navItems";

function Navbar() {
  const openInstagram = () => {
    window.open("instagramlink");
  };

  const openFacebook = () => {
    window.open("facebooklink");
  };

  return (
    <Fragment>
      <nav>
        {/*Navbar image div*/}
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            height: "160px",
            minWidth: "236px",
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
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#8a0707",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              whiteSpace: "nowrap",
              backgroundColor: "white",
              px: "5px",
            }}
          >
            Draukk - Realitní Kancelář
          </Box>
          {/*Social media links */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "2%",
            }}
          >
            <Stack direction="row" spacing={1}>
              <SvgButton
                component={InstagramIcon}
                backgroundColor={Colors.red}
                hoverColor="white"
                svgColor="white"
                onClick={openInstagram}
              />
              <SvgButton
                component={FacebookIcon}
                backgroundColor={Colors.red}
                hoverColor="white"
                svgColor="white"
                onClick={openFacebook}
              />
            </Stack>
          </Box>
        </Box>
        {/* Navbar items generated using Navbar Map*/}
        {/* <Stack
          direction="row"
          sx={{
            m: "0",
            p: "0",
            overflow: "hidden",
            bgcolor: "#8a0707",
            minWidth: "100px",
            borderRadius: "15px",
          }}
        >
          <Box
            style={{ paddingBottom: "10px", paddingTop: "10px" }}
            sx={{
              width: "5.5%",
              display: "inline-block",
              color: "#ffffff",
              fontWeight: "bold",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none" ,
              minWidth:
                "100px" ,
              ":hover": {
                bgcolor: "#a13737",
              },
            }}
          >
            <SvgIcon
              component={HomeIcon}
              sx={{ fontSize: "32px", fill: "#FFFFFF" }}
            />
          </Box>
          {Array.from(navItems, ([item, link]) => (
            <Box
              sx={{
                width: "13.5%",
                display: "inline-block",
                color: "#ffffff",
                fontWeight: "bold" ,
                textAlign: "center",
                padding: "14px 16px",
                textDecoration: "none",
                minWidth:
                  "100px",
                ":hover": {
                  bgcolor: "#a13737",
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Stack> */}
        <ul className="menulist">
          {/*Home icon*/}
          <li className="menulist">
            <a>
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
