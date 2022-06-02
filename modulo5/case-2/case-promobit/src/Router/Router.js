import { Route, Routes } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage/HomePage"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="detalhes/:id" element={<DetailsPage />} />
        </Routes>
    )
}

export default Router;
