import { RefObject } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  title: string | JSX.Element;
  children: JSX.Element;
  action?: JSX.Element;
  openPopup: boolean;
  setOpenPopup: (isOpen: boolean) => void;
  fullWidth?: boolean;
  dialogRef?: RefObject<HTMLDivElement>;
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
      sx={{ margin: "0 auto", minWidth: "725px", height: "100%" }}
      maxWidth="lg"
      fullWidth={fullWidth}
      onClose={() => setOpenPopup(false)}
    >
      <DialogTitle
        sx={{
          paddingLeft: "60px",
          paddingRight: "39px",
          paddingTop: "55px",
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
        ref={props.dialogRef}
        sx={{
          overflowY: "overlay",
          paddingLeft: "64px",
          marginRight: "46px",
          paddingRight: "27px",
          paddingBottom: "0px",
          marginBottom: "20px",
          // Ensure the scrollbar overlays content
          scrollbarGutter: "stable",
          overflow: "overlay", // This allows the scrollbar to overlay the content
        }}
      >
        {children}
      </DialogContent>
      <DialogActions
        sx={{
          paddingLeft: "74px",
          paddingRight: "74px",
          paddingBottom: "40px",
          paddingTop: "12px",
        }}
      >
        {action}
      </DialogActions>
    </Dialog>
  );
}
