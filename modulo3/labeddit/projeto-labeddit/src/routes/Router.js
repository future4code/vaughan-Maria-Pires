import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LoginPage/>} />
                <Route exact path={"signup"} element={<SignUpPage/>}/>
                <Route exact path={"feed"} element={<FeedPage/>}/>
                <Route exact path={"post/:id"} element={<PostPage/>}/>                

            </Routes>


        </BrowserRouter>
    )
}

export default Router;