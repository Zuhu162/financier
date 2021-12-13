import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Alert,
  Card,
  Grid,
  ListItem,
  ListItemButton,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewItem() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div>
      <Card>
        <ListItem sx={{ color: "White" }}>
          <ListItemButton onClick={handleOpen} sx={{ minHeight: "100px" }}>
            <Grid container justifyContent="center">
              <Grid item justifyContent="center">
                <AddCircleOutlineRoundedIcon />
              </Grid>
            </Grid>
          </ListItemButton>
        </ListItem>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">Add a new item</Typography>
          <TextField
            // onChange={(e) => setEmail(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoFocus
          />

          <TextField
            // onChange={(e) => setPassword(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            type="number"
            id="price"
            label="Price"
            name="price"
            autoFocus
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[1, 2, 3, 4, 5]}
            sx={{ width: 300, backgroundColor: "white" }}
            renderInput={(params) => <TextField {...params} label="Type" />}
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          {/* {error ? (
            <Alert severity="error">Invalid email or password</Alert>
          ) : null} */}
        </Box>
      </Modal>
    </div>
  );
}
