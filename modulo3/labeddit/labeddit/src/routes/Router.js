import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/" element={<FeedPage />} />
                <Route path="/post/:id" element={<PostPage />} />
            </Routes>



        </BrowserRouter>
    )
}

export default Router;