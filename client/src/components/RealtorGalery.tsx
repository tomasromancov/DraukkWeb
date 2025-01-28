import { Box, Paper, Stack, Typography } from "@mui/material";
import blankProfile from "/assets/blankProfile.webp";
import { Realtor } from "../ts/Realtor";

interface Props {
  cards: Realtor[];
}

function RealtorGalery({ cards }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ my: "22px", flexWrap: "wrap" }}
    >
      {cards.map((realtor, index) => (
        <Paper
          key={index}
          elevation={8}
          sx={{
            bgcolor: "#DDDDDD",
            borderRadius: "12px",
            width: "240px",
            height: "345px",
            m: "12px",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "Bold", py: "10px" }}>
            {realtor.name}
          </Typography>
          <Box
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              height: "50%",
              width: "80%",
              my: "8px",
              mx: "auto",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src={blankProfile}
              alt="profile picture"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <a
            style={{ paddingLeft: "15px", paddingRight: "15px" }}
            href={`mailto:${realtor.email}?Subject=Further%20Information`}
          >
            {realtor.email}
          </a>
          <Typography>{realtor.phoneNumber}</Typography>
        </Paper>
      ))}
    </Stack>
  );
}

export default RealtorGalery;
