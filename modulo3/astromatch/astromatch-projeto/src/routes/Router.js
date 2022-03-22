import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import MatchesPage from "../pages/MatchesPage/MatchesPage";


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/matches" element={<MatchesPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        
        
        </BrowserRouter>
    )
}

export default Router;