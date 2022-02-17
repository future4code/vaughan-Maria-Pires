import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminHomePage = () => {
    const navigate = useNavigate()
    const goToCreateTrip = () => {
        navigate("trips/create")
    }
    return(
        <div>
            <h1>Área do admin</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar viagem</button>
            <button>Logout</button>
        </div>
    )
}