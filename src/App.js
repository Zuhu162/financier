import { Box, Container, createMuiTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar";
import Dashboard from "./components/pages/dashboard";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import History from "./components/pages/history";
import Statistics from "./components/pages/statistics";
import Profile from "./components/pages/profile";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#272737",
      dark: "#121212",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      paper: "#1E1E1E",
      default: "#121212",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route
              path="/statistics"
              element={<Statistics></Statistics>}
            ></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/history" element={<History></History>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
