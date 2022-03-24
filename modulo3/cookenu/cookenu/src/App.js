import { ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
