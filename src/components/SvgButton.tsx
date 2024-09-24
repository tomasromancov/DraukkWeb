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
}

function SvgButton(props: Props) {
  const [iconColor, setIconColor] = React.useState(props.svgColor);

  return (
    <Box
      sx={{
        borderRadius: "50%",
        border: "1px solid " + props.backgroundColor,
        minWidth: "40px",
        maxWidth: "40px",
        minHeight: "40px",
        maxHeight: "40px",
        background: Colors.red,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ":hover": {
          background: props.hoverColor,
        },
      }}
      onMouseEnter={() => setIconColor(props.backgroundColor)}
      onMouseLeave={() => setIconColor(props.svgColor)}
      onClick={props.onClick}
    >
      <SvgIcon
        viewBox={props.viewBox}
        component={props.component}
        sx={{
          fill: iconColor,
        }}
      ></SvgIcon>
    </Box>
  );
}

export default SvgButton;
