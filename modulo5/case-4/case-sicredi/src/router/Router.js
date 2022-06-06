import { Route, Routes } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import DragonsListPage from "../pages/DragonsListPage/DragonsListPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<DragonsListPage/>}/>
            <Route path="/detalhe/:id" element={<DetailsPage/>}/>
            <Route path="/cadastro" element={<SignUpPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>

        </Routes>
    )
}