import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const SignUpPage = () => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUser = (event) => {
        setUser(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate()
    const goBackToSignIn = () => {
        navigate("../")
    }
    const goToFeedPage = () => {
        navigate("../feed")
    }

    return(
        <div>
            <h1>Página de cadastro</h1>
            <input
             placeholder="Nome de usuário"
             type="text"
             value={user}
             onChange={onChangeUser}
             />
            <input 
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <input 
            placeholder="Senha"
            type="password"
            value={password}
            onChange={onChangePassword}
            />
            <button>Efetuar cadastro</button>
            <button onClick={goBackToSignIn}>Voltar</button>
        </div>
    )
}

export default SignUpPage;