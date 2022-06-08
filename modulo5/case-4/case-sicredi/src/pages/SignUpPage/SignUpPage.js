import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



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
        <>
            Sign up page
            <br /><br />
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <input
                type="email"
                placeholder="Confirme o e-mail"
                value={confEmail}
                onChange={(e) => [setConfEmail(e.target.value), setError("")]}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <button onClick={handleSignUp}>Efetuar cadastro</button>
        </>
    )
}

export default SignUpPage;