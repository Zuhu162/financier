import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, Menu, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/financierLogo.svg";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Grid container mb={-9}>
        <Grid item xs={6} ml={-3}>
          <img style={{ height: "100px" }} src={logo} alt="" />
        </Grid>
        <Grid item xs={6} mt={4}>
          <Typography variant="h6">Financier</Typography>
        </Grid>
      </Grid>
      <Toolbar />
      <Divider />

      <List sx={{ color: "white" }}>
        <Link className="text-link" to={`/dashboard`}>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link className="text-link" to={`/profile`}>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Link className="text-link" to={`/history`}>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
        </Link>
        <Link className="text-link" to={`/statistics`}>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List sx={{ color: "white" }}>
        {props.user ? (
          <Link className="text-link" to="/logout">
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </Link>
        ) : (
          <Box>
            <Link className="text-link" to="/login">
              <ListItem button>
                <ListItemIcon sx={{ color: "white" }}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            </Link>
            <Link className="text-link" to="/register">
              <ListItem button>
                <ListItemIcon sx={{ color: "white" }}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItem>
            </Link>
          </Box>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={1} md={0.5}>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xl: "none" } }}
              >
                <MenuIcon color="white" />
              </IconButton>
            </Grid>
            <Grid item mt={0.5} xs={10} md={11}>
              <Typography variant="h6" noWrap component="div">
                Financier
              </Typography>
            </Grid>
            {props.user ? (
              <Grid item xs={1} md={0.5}>
                <Avatar sx={{ width: 40, height: 40, bgcolor: "#EA4C89" }}>
                  <Typography color="text.primary">
                    {props.user.username[0].toUpperCase()}
                  </Typography>
                </Avatar>
              </Grid>
            ) : null}
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "none", xl: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
