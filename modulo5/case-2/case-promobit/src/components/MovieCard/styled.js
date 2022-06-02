import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 15px;
@media(max-width: 600px){

}  
`
export const P = styled.p`
margin-left: 15px;
font-weight: bold;
`
export const ReleaseDate = styled.p`
margin: 0;
margin-left: 15px;
color: gray;
`

export const Img = styled.img`
width: 176px;
height: 264px;
@media(max-width: 600px){
    width: 150px;
    height: 230px;
}  
`