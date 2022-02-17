import React from "react"
import { useNavigate } from "react-router-dom"

export const ListTripPage = () => {
    const navigate = useNavigate()
    const goToApplicationFormPage = () => {
        navigate("/application")
    }
    return(
        <div>
            <h1>ListTripPage</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
        </div>
    )
}