import styled from "styled-components";

export const ScreenContainer = styled.div`
background-color: #b3c6ff;
display: flex;
width: 100%;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
@media(max-width: 600px){
    overflow: -moz-hidden-unscrollable;
}
`

export const EmailInput = styled.input`
width: 300px;
height: 40px;
margin-bottom: 20px;
border-radius: 10px;
border-style: none;
`

export const PasswordInput = styled.input`
width: 300px;
height: 40px;
margin-bottom: 20px;
border-radius: 10px;
border-style: none;
`

export const SignUpButton = styled.button`
background-color: #3366ff;
width: 200px;
height: 30px;
cursor: pointer;
border-style: none;
border-radius: 10px;
margin: 20px;
`

export const LoginButton = styled.button`
background-color: #3366ff;
width: 240px;
height: 30px;
cursor: pointer;
border-style: none;
border-radius: 10px;
margin: 20px;
`

export const Dragon = styled.img`
width: 250px;
position: absolute;
top: 25%;
left: 72%;
@media(max-width: 600px){
    opacity: 0;
} 
`

