import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate()
    const goToListTripPage = () => {
      navigate("trips/list")
    }
    const goToAdminHomePage = () => {
        navigate("admin/trips/list")
    }

    return (
        <div>
            <h1>LabeX</h1>
            <button onClick={goToListTripPage}>Ver viagens</button>
            <button onClick={goToAdminHomePage}>Área de admin</button>
        </div>
    )
}