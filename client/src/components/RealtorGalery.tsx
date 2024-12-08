import { Box, Paper, Stack, Typography } from "@mui/material";
import blankProfile from "../assets/blankProfile.webp";

let realtors = ["Jan Jedlička", "Pavel Macek", "Josef Černý"];

function RealtorGalery() {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ my: "22px" }}>
      {realtors.map((realtor, index) => (
        <Paper
          key={index}
          elevation={8}
          sx={{
            bgcolor: "#DDDDDD",
            borderRadius: "12px",
            width: "240px",
            height: "345px",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "Bold", py: "10px" }}>
            {realtor}
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
            href="mailto:jan.jedlicka@gmail.com?Subject=Further%20Information"
          >
            {"jan.jedlicka@gmail.com"}
          </a>
          <Typography>{"+420 665 190 695"}</Typography>
        </Paper>
      ))}
    </Stack>
  );
}

export default RealtorGalery;
