import React from "react";
import { Route, Routes } from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetailsPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Router = ({ rightButtonText, setRightButtonText }) => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />
            <Route path="/cadastro" element={<SignUpPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />
            <Route path="/" element={<RecipesListPage />} />
            <Route path="/detalhe/:id" element={<RecipeDetailsPage />} />
            <Route path="/adicionar-receita" element={<AddRecipesPage />} />
        </Routes>
    )
}

export default Router;