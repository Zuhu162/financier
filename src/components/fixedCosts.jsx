import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Avatar from "@mui/material/Avatar";
import SaveIcon from "@mui/icons-material/Save";
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

export default function FixedCosts(props) {
  const items = props.items ? props.items : [];

  const [defaultData, setDefaultData] = useState({
    name: "",
    cost: "",
    type: props.name,
  });

  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    type: props.name,
  });

  //MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let type;
  let type2;

  if (defaultData.type === "Entertainment") {
    type2 = {
      Entertainment: {
        name: defaultData.name,
        cost: defaultData.cost,
      },
    };
  } else if (defaultData.type === "Utilities") {
    type2 = {
      Utility: {
        name: defaultData.name,
        cost: defaultData.cost,
      },
    };
  } else if (defaultData.type === "Education") {
    type2 = {
      Education: {
        name: defaultData.name,
        cost: defaultData.cost,
      },
    };
  } else if (defaultData.type === "MISC") {
    type2 = {
      MISC: {
        name: defaultData.name,
        cost: defaultData.cost,
      },
    };
  } else if (defaultData.type === "One-Time") {
    type2 = {
      OneTime: {
        name: defaultData.name,
        cost: defaultData.cost,
      },
    };
  }
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
    const res2 = await axios.put(
      `/users/${localStorage.getItem("currentUser")}/remove`,
      type2
    );
    window.location.replace("/");
  };

  const handleDelete = async () => {
    try {
      const res = await axios.put(
        `/users/${localStorage.getItem("currentUser")}/remove`,
        type
      );
      window.location.replace("/");
    } catch (err) {}
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
                  onClick={() => {
                    setFormData({
                      ...formData,
                      name: items.name,
                      cost: items.cost,
                    });
                    setDefaultData({
                      ...formData,
                      name: items.name,
                      cost: items.cost,
                    });
                  }}
                  sx={{ minHeight: "100px" }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#1A90FF", color: "white" }}>
                      {items.name[0]}
                    </Avatar>
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
            onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            margin="normal"
            required
            fullWidth
            type="number"
            value={formData.cost}
            id="cost"
            label="cost"
            name="cost"
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
            <SaveIcon sx={{ ml: 0.5, mr: 1 }}></SaveIcon>
          </Button>
          <Button
            onClick={handleDelete}
            type="delete"
            variant="contained"
            sx={{ ml: 2, mt: 3, mb: 2, backgroundColor: "secondary.main" }}
          >
            Delete
            <DeleteForeverIcon></DeleteForeverIcon>
          </Button>
          {/* {error ? (
            <Alert severity="error">Invalid email or password</Alert>
          ) : null} */}
        </Box>
      </Modal>
    </Box>
  );
}
