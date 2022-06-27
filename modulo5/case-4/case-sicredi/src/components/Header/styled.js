import styled from "styled-components";

export const PageHeader = styled.div`
display: flex;
align-items: center;
background-color: #002699;
width: 100%;
height: 15vh;
color: white;
`

export const Img1 = styled.img`
width: 50px;
margin: 20px;
`

export const Title = styled.h2`
margin: 5px;
margin-top: 15px;
@media(max-width: 600px){
    position: absolute;
    left: 22%;
}
`

export const Button = styled.button`
width: 180px;
height: 30px;
background-color: gray;
border-style: none;
position: absolute;
left: 80%;
cursor: pointer;
@media(max-width: 600px){
    width: 55px;
    height: 20px;
    left: 83%;
    top: 45%;
}
`