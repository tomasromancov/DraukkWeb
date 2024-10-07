import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";

interface Props {
  title: string | JSX.Element;
  children: JSX.Element;
  sx?: SxProps;
}

function Section({ title, children, sx }: Props) {
  return (
    <Box sx={{ marginTop: "50px", marginBottom: "70px", ...sx }}>
      <Typography
        sx={{ fontSize: "36px", textAlign: "center", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default Section;
