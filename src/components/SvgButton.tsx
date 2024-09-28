import { SvgIcon, Box, SxProps } from "@mui/material";
import { ElementType } from "react";
import { Colors } from "../ts/Colors";
import React from "react";

interface Props {
  viewBox?: string;
  component: ElementType;
  sx?: SxProps;
  backgroundColor: string;
  hoverColor: string;
  svgColor: string;
  onClick?: () => void;
  resetOnClick?: boolean;
}

function SvgButton(props: Props) {
  const [iconColor, setIconColor] = React.useState(props.svgColor);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      sx={{
        borderRadius: "50%",
        border: "1px solid " + props.backgroundColor,
        minWidth: "40px",
        maxWidth: "40px",
        minHeight: "40px",
        maxHeight: "40px",
        background: isHovered ? props.hoverColor : props.backgroundColor, // Set background color based on hover state
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease", // Smooth transition when the background color change
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setIconColor(props.backgroundColor);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIconColor(props.svgColor);
      }}
      onClick={() => {
        if (props.onClick) props.onClick();

        // Only reset hover state if the button moves (indicated by the resetOnClick prop)
        if (props.resetOnClick) {
          setIsHovered(false);
          setIconColor(props.svgColor);
        }
      }}
    >
      <SvgIcon
        viewBox={props.viewBox}
        component={props.component}
        sx={{
          fill: iconColor,
          transition: "fill 0.3s ease", // Smooth transition for icon color
        }}
      ></SvgIcon>
    </Box>
  );
}

export default SvgButton;
