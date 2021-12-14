import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import {
  Autocomplete,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import NewItem from "./newItem";

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

export default function FixedCosts(props) {
  const items = props.items ? props.items : [];

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    id: "",
    type: props.name,
  });

  //MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    console.log("Submitted", formData);
  };

  return (
    <Box mt={10}>
      <Typography variant="h4">
        {props.name}:<Badge className="badge">${props.total}</Badge>
      </Typography>
      <List>
        {items.map((items) => {
          return (
            <Card sx={{ marginBottom: "1px" }}>
              <ListItem
                onClick={handleOpen}
                key={items}
                sx={{ color: "White" }}
              >
                <ListItemButton
                  onClick={() =>
                    setFormData({
                      ...formData,
                      name: items.name,
                      price: items.cost,
                    })
                  }
                  sx={{ minHeight: "100px" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${items + 1}`}
                      src={`/static/images/avatar/${items + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText>
                    <Box textAlign="left">
                      <Typography>{items.name} </Typography>
                    </Box>
                  </ListItemText>
                  <ListItemText>
                    <Box textAlign="right">
                      <Typography>${items.cost} </Typography>
                    </Box>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Card>
          );
        })}
        <NewItem default={props.name}></NewItem>
      </List>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">Edit Expenditure</Typography>
          <TextField
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            color="primary"
            margin="normal"
            sx={{ borderColor: "white" }}
            required
            fullWidth
            id="name"
            value={formData.name}
            label="name"
            name="name"
          />
          <TextField
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            margin="normal"
            required
            fullWidth
            type="number"
            value={formData.price}
            id="price"
            label="Price"
            name="price"
            autoFocus
            sx={{ marginBottom: "25px" }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["Utilities", "Entertainment", "Education", "MISC"]}
            sx={{ width: 300 }}
            onChange={(event, value) =>
              setFormData({ ...formData, type: value })
            }
            value={formData.type}
            renderInput={(params) => <TextField {...params} label="Type" />}
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
          <Button
            onClick={handleSubmit}
            type="delete"
            variant="contained"
            sx={{ ml: 2, mt: 3, mb: 2, backgroundColor: "secondary.main" }}
          >
            Delete
          </Button>
          {/* {error ? (
            <Alert severity="error">Invalid email or password</Alert>
          ) : null} */}
        </Box>
      </Modal>
    </Box>
  );
}
