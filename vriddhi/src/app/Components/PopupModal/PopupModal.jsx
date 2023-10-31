import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  color:"white",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "90%",
  bgcolor: "#10181F",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textTransform: "uppercase",
  fontFamily: "ubuntuCondensed",
  overflow: "scroll",
};

export default function PopupModal({ isOpen, onClose, children }) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
