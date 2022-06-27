import styled from "styled-components";

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 80px;
`

export const Img = styled.img`
width: 350px;
@media(max-width: 600px){
    width: 200px;
    margin: 20px;
}
`

export const Button = styled.button`
width: 200px;
height: 30px;
background-color: black;
color: white;
border-style: none;
margin: 20px;
cursor: pointer;
`