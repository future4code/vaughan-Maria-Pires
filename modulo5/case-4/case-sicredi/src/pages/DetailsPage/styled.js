import styled from "styled-components";

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
min-height: 100vh;
background-color: #e6e6ff;
@media(max-width: 600px){
    overflow: hidden;
}
`

export const DetailsCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
align-items: center;
`

export const Img = styled.img`
position: absolute;
width: 200px;
left: 400px;
@media(max-width: 600px){
    width: 100px;
    left: 70px;
    top: -100px;
}
`
export const Button = styled.button`
width: 200px;
height: 40px;
background-color: #1a1aff;
border-style: none;
border-radius: 10px;
cursor: pointer;
`
