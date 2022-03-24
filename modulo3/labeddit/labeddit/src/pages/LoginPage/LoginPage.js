import { Button } from "@material-ui/core";
import React from "react";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <h1>Login</h1>
            <LoginForm/>
            <SignUpButtonContainer>
            <Button
            onClick={() => goToSignUp(navigate)}
            type={"submit"}
            fullWidth
            variant={"text"}
            >Cadastre-se</Button>
            </SignUpButtonContainer>
            
            
            
        </ScreenContainer>
    )
}

export default LoginPage;