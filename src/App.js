import { Box, Container, createMuiTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar";
import Dashboard from "./components/pages/dashboard";

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Box>
            <Dashboard></Dashboard>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
