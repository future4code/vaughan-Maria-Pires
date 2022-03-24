import React from "react";
import { LogoImage, ScreenContainer } from "../LoginPage/styled";
import SignUpForm from './SignUpForm';
import logo from "../../assets/logo.png";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const SignUpPage = ({rightButtonText, setRightButtonText}) => {
    useUnprotectedPage()
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage;