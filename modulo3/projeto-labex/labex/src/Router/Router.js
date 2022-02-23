import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { LoginPage } from "../pages/LoginPage";
import { ListTripPage } from "../pages/ListTripPage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { AdminHomePage } from "../pages/AdminHomePage";
import { TripDetailsPage } from "../pages/TripDetailsPage";

export default function Router(){
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path={"/"} element={<HomePage/>}/>
      <Route exact path={"login"} element={<LoginPage/>}/>
      <Route exact path={"trips/list"} element={<ListTripPage/>}/>
      <Route exact path={"trips/application"} element={<ApplicationFormPage/>}/>
      <Route exact path={"admin/trips/list"} element={<AdminHomePage/>}/>
      <Route exact path={"admin/trips/create"} element={<CreateTripPage/>}/>
      <Route path={"admin/trips/:id"} element={<TripDetailsPage/>}/>
  
    </Routes>
    </BrowserRouter>
  )
}
