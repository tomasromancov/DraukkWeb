import { Stack } from "@mui/material";
import { Colors } from "../ts/Colors.ts";
import SvgButton from "./SvgButton.tsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  const footItems = new Map<string, string>([
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
    <footer>
      <ul className="menulist" style={{ backgroundColor: Colors.grey }}>
        {Array.from(footItems, ([item, link]) => (
          <li key={item} className="menulist">
            <a href={link}>{item}</a>
          </li>
        ))}
        <li
          style={{
            float: "right", // Keep float for layout
            height: "50px", // Set a fixed height
            display: "inline-block", // Ensure it behaves like an inline block element
          }}
        >
          <Stack direction="row" spacing={1} sx={{ py: "8px", px: "10px" }}>
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
              onClick={openInstagram}
            />
          </Stack>
        </li>
        <li style={{ float: "right" }}>
          <a
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "14px 16px 14px 16px",
            }}
            href="mailto:realitka@gmail.com?Subject=Further%20Information"
          >
            realitka@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
