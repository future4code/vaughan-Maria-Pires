import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate()
    const goToSignUp = () => {
        navigate("signup")
    }
    const goToFeedPage = () => {
        navigate("feed")
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${BASE_URL}/users/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                goToFeedPage()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1>Página de Login</h1>
            <input
                placeholder="E-mail"
                type="email"
                onChange={onChangeEmail}
                value={email}
            />
            <input
                placeholder="Senha"
                type="password"
                onChange={onChangePassword}
                value={password}
            />
            <button onClick={onSubmitLogin}>Entrar</button>
            <button onClick={goToSignUp}>Cadastre-se</button>
        </div>
    )
}

export default LoginPage;