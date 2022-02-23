import React from "react";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm/>
                <SignUpButtonContainer>
                    <Button
                    onClick={() => goToSignUp(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                    > 
                    Não possui conta? Cadastre-se já
                    </Button>

                </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;