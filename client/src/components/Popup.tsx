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
      sx={{ margin: "0 auto", height: "100%" }}
      maxWidth="lg"
      fullWidth={fullWidth}
      onClose={() => setOpenPopup(false)}
    >
      <DialogTitle
        sx={{
          paddingLeft: { sx: "6px", sm: "60px" },
          paddingRight: { sx: "2px", sm: "39px" },
          paddingTop: { sx: "2px", sm: "55px" },
          paddingBottom: { sx: "2px", sm: "36px" },
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
          marginRight: { sx: "0px", sm: "46px" },
          paddingBottom: "0px",
          marginBottom: { sx: "0px", sm: "20px" },
          paddingLeft: { sx: "6px", sm: "64px" },
          paddingRight: { sx: "2px", sm: "27px" },
          paddingTop: { sx: "2px", sm: "55px" },
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
