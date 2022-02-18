import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";



export const LoginPage = () => {
    const navigate = useNavigate()
    const goToAdminHomePage = () => {
        navigate("../admin/trips/list/")
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <h1>LoginPage</h1>
            <input 
            type="email"
            placeholder="E-mail" 
            value={email}
            onChange={onChangeEmail}
            />
            <input 
            type="password" 
            placeholder="Senha" 
            value={password}
            onChange={onChangePassword}
            />
            <button onClick={onSubmitLogin}>Entrar</button>
        </div>
    )
}