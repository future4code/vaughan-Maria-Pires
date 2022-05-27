import styled from "styled-components";

export const ScreenContainer = styled.div`
max-width: 100vw;

`


export const Header = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
background-color: #5C16C5;
`

export const HeaderText = styled.p`
width: 180px;
height: 24px;
color: #FFFFFF;
margin-right: 15px;
font-size: 24px;
font-weight: bolder;
`

export const MoviesContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr)
`