import styled from "styled-components";



export const TMDBNavBarDetailsPage = styled.div`
width: 100%;
height: 300px;
display: grid;
align-items: center;
background-color: #2D0C5E;
color: white;  
overflow-y: hidden;
@media(max-width: 600px){
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2D0C5E;
    display: grid;
    justify-content: center;

}
`

export const Poster = styled.img`
position: absolute;
height: 423px;
width: 250px;
top: 20%;
left: 12%;
@media(max-width: 600px){
    height: 300px;
    width: 180px;
    top: 10%;
    left: 26%;
}
`

export const H2 = styled.h2`
color: white;
position: absolute;
top: 18%;
left: 38%;
@media(max-width: 600px){
    opacity: 0;
}
`

export const MovieInfos = styled.p`
color: white;
position: absolute;
top: 25%;
left: 38%;
@media(max-width: 600px){
    font-size: small;
    position: absolute;
    top: 68%;
    left: 12%;
}
`


export const H4 = styled.h4`
color: white;
position: absolute;
top: 30%; 
left: 38%;
@media(max-width: 600px){
    position: absolute;
    top: 74%;
    left: 15%;
} 
`

export const OverviewText = styled.p`
color: white;
position: absolute;
margin: 0px;
top: 38%;
left: 38%;
word-wrap: break-word;
@media(max-width: 600px){
    font-size: small;
    position: absolute;
    top: 81%;
    left: 15%;
    margin-right: 12px;
} 
`


export const Span = styled.span`
margin-left: 2px;
`

export const GrayDiv = styled.div`
background-color: #d1d1e0;
width: 100%;
height: 300px;
`

export const Button = styled.button`
background-color: black;
color: white;
position: absolute;
left: 38%;
top: 60%;
border: 1px solid black;
width: 150px;
height: 40px;
border-radius: 10px;
cursor: pointer;
:hover{
    background-color: white;
    border: 1px solid white;
    color: black;
}
@media(max-width: 600px){
    opacity: 0;

}
`