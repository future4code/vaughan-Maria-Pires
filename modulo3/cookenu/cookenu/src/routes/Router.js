import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage  from '../pages/LoginPage/LoginPage';
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetailsPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage/>}/>
                <Route path="/" element={<RecipesListPage/>}/>
                <Route path="/detalhe/:id" element={<RecipeDetailsPage/>}/>
                <Route path="/adicionar-receita" element={<AddRecipesPage/>}/>
            </Routes>




        </BrowserRouter>
    )
}

export default Router;