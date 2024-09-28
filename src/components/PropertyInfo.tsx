import { Stack, Typography } from "@mui/material";

interface Props {
  category: string;
  info: string;
}

function PropertyInfo({ category, info }: Props) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography>{category}</Typography>
      <Typography>{info}</Typography>
    </Stack>
  );
}

export default PropertyInfo;
