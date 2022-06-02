import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router/Router';
import Header from "./components/Header/Header";


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
