import styled from "styled-components";

export const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
@media(max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
    margin-left: 28px;
}

`

export const TravelCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 24px;
width: 270px;
height: 250px;
box-shadow: 2px 2px 4px 4px darkgray;
border-radius: 10px;
text-align: center;
`


