import styled from 'styled-components';

export const LotoFacilTitle = styled.h1`
color: white;
width: 25%;
margin-left: 4%;
position: absolute;
top: 40%;
background-color: #DD7AC6;
@media(max-width: 600px){
    opacity: 1;
    font-size: 32px;
    overflow-x: visible;
    bottom: 100%;
    top: 20%;
    margin-left: 24%;   
} 
`
export const LotoFacilSubtitleDiv = styled.h4`
color: white;
width: 20%;
margin-left: 4%;
position: absolute;
bottom: 0;
background-color: #DD7AC6;
@media(max-width: 600px){
    overflow-x: visible;
    font-size: 14px;
    bottom: 50%;
    left: 30%;
} 
`
export const H4 = styled.h4`
background-color: #DD7AC6;
@media(max-width: 600px){
    opacity: 0;
}
`
export const H4Mobile = styled.h4`
opacity: 0;
@media(max-width: 600px){
    position: absolute;
    opacity: 1;
    margin-left: 15%;
    background-color: #DD7AC6;
    bottom: 0;
}
`

