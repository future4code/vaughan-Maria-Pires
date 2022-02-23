import React from "react";
import { LogoImage, ScreenContainer } from "../LoginPage/styled";
import SignUpForm from './SignUpForm';
import logo from "../../assets/logo.png";


const SignUpPage = () => {
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm/>
        </ScreenContainer>
    )
}

export default SignUpPage;