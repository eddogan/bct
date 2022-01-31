import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#373745"
    },
    secondary: {
      main: "#cbe701"
    }
  },
  typography: {
    fontFamily: ["Muli", "sans-serif"].join(",")
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
