import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
//import { ICONS } from "../../imports/images/icons";

type Props = {
  title: string | JSX.Element;
  children: JSX.Element;
  action?: JSX.Element;
  openPopup: boolean;
  setOpenPopup: (isOpen: boolean) => void;
  fullWidth?: boolean;
};

export default function Popup(props: Props) {
  const {
    title,
    children,
    action,
    openPopup,
    setOpenPopup,
    fullWidth = false,
  } = props;

  return (
    <Dialog
      open={openPopup}
      sx={{ margin: "0 auto", minWidth: "725px" }}
      maxWidth="lg"
      fullWidth={fullWidth}
    >
      <DialogTitle
        sx={{
          paddingLeft: "60px",
          paddingRight: "39px",
          paddingTop: "70px",
          paddingBottom: "36px",
        }}
      >
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {title}
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOpenPopup(false);
            }}
          />
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{
          overflowY: "overlay",
          paddingLeft: "64px",
          marginRight: "46px",
          paddingRight: "27px",
          paddingBottom: "0px",
          marginBottom: "20px",
        }}
      >
        {children}
      </DialogContent>
      <DialogActions
        sx={{
          paddingLeft: "74px",
          paddingRight: "74px",
          paddingBottom: "50px",
          paddingTop: "28px",
        }}
      >
        {action}
      </DialogActions>
    </Dialog>
  );
}
