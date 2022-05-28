import styled from "styled-components";

export const QuinaTitle = styled.h1`
color: white;
background-color: #8666EF;
width: 25%;
margin-left: 4%;
position: absolute;
top: 40%;
@media(max-width: 600px){
    opacity: 1;
    font-size: 32px;
    overflow-x: visible;
    bottom: 100%;
    top: 20%;
    margin-left: 32%;   
} 
`

export const QuinaSubTitleDiv = styled.div`
color: white;
background-color: #8666EF;
width: 20%;
margin-left: 4%;
position: absolute;
bottom: 0;
@media(max-width: 600px){
    overflow-x: visible;
    font-size: 14px;
    bottom: 50%;
    left: 32%;
} 
`

export const H4 = styled.h4`
background-color: #8666EF;
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
    background-color: #8666EF;
    bottom: 10%;
}  
`

