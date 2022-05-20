import styled from "styled-components";

export const DiaDeSorteTitle = styled.h1`
background-color: #BFAF83;
color: white;
width: 25%;
margin-left: 4%;
position: absolute;
top: 40%;
@media(max-width: 600px){
    opacity: 1;
    font-size: 25px;
    overflow-x: visible;
    bottom: 100%;
    top: 20%;
    margin-left: 34%;  
} 
`

export const DiaDeSorteSubtitleDiv = styled.div`
color: white;
width: 20%;
margin-left: 4%;
position: absolute;
bottom: 0;
background-color: #BFAF83;
@media(max-width: 600px){
    overflow-x: visible;
    font-size: 14px;
    bottom: 50%;
    left: 30%;
} 
`

export const H4 = styled.h4`
background-color: #BFAF83;
@media(max-width: 600px){
    opacity: 0;
}
`
export const H4Mobile = styled.h4`
opacity: 0;
@media(max-width: 600px){
    position: absolute;
    opacity: 1;
    margin-left: 12%;
    background-color: #BFAF83;
    bottom: 10%;
}  
`