import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BasicModal({ open, setOpen, handleOpen, handleClose, children }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          height: "100%",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 300,
            height: 300,
            bgcolor: "white",
            color: "primary.main",
            padding: "10px",
            height: "auto",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ display: "flex", flexDirection: "column" }}
            id="modal-modal-title"
            variant="h6"
            component="h6"
          >
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
