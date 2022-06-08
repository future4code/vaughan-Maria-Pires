import { Route, Routes } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import DragonsListPage from "../pages/DragonsListPage/DragonsListPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpDragonPage from "../pages/SignUpDragonPage/SignUpDragonPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import useAuth from "../hooks/useAuth"

const Router = () => {
    const Private = ({ Item }) => {
        const { signed } = useAuth();
        return signed > 0 ? <Item/> : <LoginPage/>
    }
    return(
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<SignUpPage/>}/>
            <Route path="/"  element={<Private Item={DragonsListPage}/>}/>
            <Route path="/detalhe/:id" element={<Private Item={DetailsPage}/>}/>
            <Route path="/cadastro-dragao" element={<Private Item={SignUpDragonPage}/>}/>
            <Route path="*" element={<ErrorPage/>}/>

        </Routes>
    )
}

export default Router;