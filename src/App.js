import { Box, Container, createMuiTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar";
import Dashboard from "./components/pages/dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import History from "./components/pages/history";
import Statistics from "./components/pages/statistics";
import Profile from "./components/pages/profile";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Logout from "./components/pages/logout";
import Navbar2 from "./components/appBar";
import Home from "./components/pages/home";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
      dark: "#920030",
    },
    background: {
      paper: "#1E1E1E",
      default: "#121212",
    },
    text: {
      primary: "#ffffff",
    },
    error: {
      main: "#291a1a",
    },
    multilineColor: {
      color: "red",
    },
    success: {
      main: "#4fb753",
    },
  },
});

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");

      const currentUser = jwtDecode(jwt);
      localStorage.setItem("currentUser", currentUser._id);
      setUser(currentUser);
    } catch (err) {}
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        {user ? <Navbar user={user}></Navbar> : <Navbar2></Navbar2>}

        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            bgcolor: "background.default",
          }}
        >
          <div className="container">
            <Switch>
              <Route path="/logout">
                <Logout></Logout>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/statistics">
                {user ? <Statistics></Statistics> : <Redirect to="/" />}
              </Route>
              <Route exact path="/profile">
                {user ? <Profile user={user}></Profile> : <Redirect to="/" />}
              </Route>
              <Route exact path="/history">
                {user ? <History></History> : <Redirect to="/" />}
              </Route>
              <Route exact path="/dashboard">
                {user ? (
                  <Dashboard user={user}></Dashboard>
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <Route exact path="/">
                {user ? <Dashboard user={user}></Dashboard> : <Home></Home>}
              </Route>
            </Switch>
          </div>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
