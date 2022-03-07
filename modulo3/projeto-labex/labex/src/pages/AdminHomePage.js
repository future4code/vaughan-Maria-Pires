import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";

export const AdminHomePage = () => {
        useEffect(() => {
            const token = localStorage.getItem("token")
            axios.get(`${BASE_URL}/trips`, {
                headers: {
                    auth: token
                }
            })
                .then((res) => {
                    console.log(res.data.trips)
                })
                .catch((err) => {
                    console.log(err)
                })
        }, [])

    const navigate = useNavigate()
    const goToCreateTrip = () => {
        navigate("../admin/trips/create")
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