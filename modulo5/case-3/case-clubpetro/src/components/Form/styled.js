import styled from "styled-components";
import ReactInputMask from 'react-input-mask';

export const MenuBar = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
background: #4F9419;
width: 100%;
height: 25vh;
@media(max-width: 600px){
  height: 200px;
}  
`

export const Select = styled.select`
width: 300px;
height: 50px;
border-radius: 12px;
border: none;
background-color: white;
@media(max-width: 600px){
  width: 90px;
  height: 60px;
}
`

export const InputCity = styled.input`
width: 250px;
height: 50px;
border-radius: 12px;
border: none;
@media(max-width: 600px){
  width: 90px;
  height: 60px;
}
`

export const InputDate = styled(ReactInputMask)`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  @media(max-width: 600px){
    width: 70px;
    height: 60px;
  }
`;

export const AddButton = styled.button`
width: 200px;
height: 50px;
background-color: #006C18;
color: white;
border: none;
border-radius: 10px;
cursor: pointer;
@media(max-width: 600px){
  width: 70px;
  height: 60px;
}
`