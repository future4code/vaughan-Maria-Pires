import styled from "styled-components";

export const ScreenContainer = styled.div`
background-color: #b3c6ff;
display: flex;
width: 100%;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const NameInput = styled.input`
width: 300px;
height: 40px;
margin-bottom: 20px;
border-radius: 10px;
border-style: none;
`

export const TypeInput = styled.input`
width: 300px;
height: 40px;
margin-bottom: 20px;
border-radius: 10px;
border-style: none;
`

export const ButtonsDiv = styled.div`
display:flex;
@media(max-width: 600px){
    display: grid;
}
`

export const Button = styled.button`
background-color: #3366ff;
width: 200px;
height: 30px;
cursor: pointer;
border-style: none;
border-radius: 10px;
margin: 20px;
`


