import React from "react"
import { useNavigate } from "react-router-dom"



export const CreateTripPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Create Trip Page</h1>
            <input/>
            <input/>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}