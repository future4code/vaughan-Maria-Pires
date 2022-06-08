import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../router/coordinator";


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
        <>
            login page
            <br /><br />
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <button onClick={handleLogin}>Entrar</button>
            <br /><br />
            <button onClick={() => goToSignUpPage(navigate)}>Não possui conta? Cadastre-se já</button>
        </>
    )
}

export default LoginPage;