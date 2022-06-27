import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../router/coordinator";
import { Dragon, EmailInput, LoginButton, PasswordInput, ScreenContainer, SignUpButton } from "./styled";
import dragon from "../../img/dragon.png"


const LoginPage = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !password) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signIn(email, password);

        if (res) {
            setError(res);
            return;
        }

        navigate("/");
    };


    return (
        <ScreenContainer>
            <h1>Login</h1>
            <EmailInput
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <PasswordInput
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <LoginButton onClick={handleLogin}>Entrar</LoginButton>
            <SignUpButton onClick={() => goToSignUpPage(navigate)}>Não possui conta? Cadastre-se já</SignUpButton>
            <Dragon src={dragon} />
        </ScreenContainer>

    )
}

export default LoginPage;