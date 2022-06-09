import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { AuthProvider } from "./context/auth";
import "./App.css";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
