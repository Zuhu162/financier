import React, { useState, useEffect } from "react";
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
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#212946",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewItem(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    type: props.default,
  });

  let type;

  if (formData.type === "Entertainment") {
    type = {
      Entertainment: {
        name: formData.name,
        cost: formData.cost,
      },
    };
  } else if (formData.type === "Utilities") {
    type = {
      Utility: {
        name: formData.name,
        cost: formData.cost,
      },
    };
  } else if (formData.type === "Education") {
    type = {
      Education: {
        name: formData.name,
        cost: formData.cost,
      },
    };
  } else if (formData.type === "MISC") {
    type = {
      MISC: {
        name: formData.name,
        cost: formData.cost,
      },
    };
  } else if (formData.type === "One-Time") {
    type = {
      OneTime: {
        name: formData.name,
        cost: formData.cost,
      },
    };
  }

  const handleSubmit = async () => {
    console.log("Submitted", type);

    const res = await axios.put(
      `/users/${localStorage.getItem("currentUser")}/add`,
      type
    );
    window.location.replace("/");
  };

  return (
    <div>
      <Card>
        <ListItem>
          <ListItemButton onClick={handleOpen} sx={{ minHeight: "100px" }}>
            <Grid container justifyContent="center">
              <Grid item justifyContent="center">
                <AddCircleOutlineRoundedIcon
                  sx={{ fontSize: 35, color: "#00C49F" }}
                />
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
          <Typography variant="h5">Log New Expenditure</Typography>
          <TextField
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoFocus
          />

          <TextField
            onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
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
            onChange={(event, value) =>
              setFormData({ ...formData, type: value })
            }
            value={formData.type}
            options={["Utilities", "Entertainment", "Education", "MISC"]}
            sx={{ width: 300 }}
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
