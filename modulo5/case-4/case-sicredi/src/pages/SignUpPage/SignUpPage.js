import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dragon, EmailInput, LoginButton, PasswordInput, ScreenContainer, SignUpButton } from "./styled";
import dragaoVermelho from "../../img/dragaoVermelho.png"



const SignUpPage = () => {
    const { signUp } = useAuth();

    const [email, setEmail] = useState("");
    const [confEmail, setConfEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (!email | !confEmail | !password) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== confEmail) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signUp(email, password);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        navigate("/");
    };



    return (
        <ScreenContainer>
            <h1>Cadastro</h1>
            <EmailInput
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <EmailInput
                type="email"
                placeholder="Confirme o e-mail"
                value={confEmail}
                onChange={(e) => [setConfEmail(e.target.value), setError("")]}
            />
            <PasswordInput
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <SignUpButton onClick={handleSignUp}>Efetuar cadastro</SignUpButton>
            <LoginButton onClick={() => navigate(-1)}>Já possui conta? Entre aqui</LoginButton>
            <Dragon src={dragaoVermelho}/>
        </ScreenContainer>
    )
}

export default SignUpPage;