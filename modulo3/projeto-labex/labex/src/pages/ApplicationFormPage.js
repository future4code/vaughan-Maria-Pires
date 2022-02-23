import React from "react";
import { useNavigate } from "react-router-dom";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <input/>
            <input/>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}