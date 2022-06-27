import styled from "styled-components";

export const ScreenContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
@media(max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
    margin-left: 40px;
}
`

export const ButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
`

export const AddNewDragonButton = styled.button`
width: 300px;
height: 60px;
background-color: #ff3333;
color: white;
border-radius: 10px;
border-style: none;
cursor: pointer;

`