import styled from "styled-components";

export const SelectInput = styled.select`
background-color: white;
width: 200px;
height: 40px;
margin: 3.4%;
border: 1px solid white;
border-radius: 10px;
text-align: center;
font-weight: bold;
@media(max-width: 600px){ 
    display: block;
    margin: 0 auto;
    margin-top: 8%;
} 
`

export const GreenSideBar = styled.div`
position: absolute;
right: 65%;
left: 0%;
top: 0%;
bottom: 0%;
background: #6BEFA3;
border-top-right-radius: 20%;
border-bottom-right-radius: 20%;
@media(max-width: 600px){
    border-top-right-radius: 0%;
    width: 100%;
    height: 50%;
}  
`

export const PurpleSideBar = styled.div`
position: absolute;
right: 65%;
left: 0%;
top: 0%;
bottom: 0%;
background: #8666EF;
border-top-right-radius: 20%;
border-bottom-right-radius: 20%;
@media(max-width: 600px){
    border-top-right-radius: 0%;
    width: 100%;
    height: 50%;
}  

`

export const FuchsiaSideBar = styled.div`
position: absolute;
right: 65%;
left: 0%;
top: 0%;
bottom: 0%;
background: #DD7AC6;
border-top-right-radius: 20%;
border-bottom-right-radius: 20%;
@media(max-width: 600px){
    border-top-right-radius: 0%;
    width: 100%;
    height: 50%;
}  
`

export const OrangeSideBar = styled.div`
position: absolute;
right: 65%;
left: 0%;
top: 0%;
bottom: 0%;
background: #FFAB64;
border-top-right-radius: 20%;
border-bottom-right-radius: 20%;
@media(max-width: 600px){
    border-top-right-radius: 0%;
    width: 100%;
    height: 50%;
}  
`

export const DarkGreenSideBar = styled.div`
position: absolute;
right: 65%;
left: 0%;
top: 0%;
bottom: 0%;
background: #5AAD7D;
border-top-right-radius: 20%;
border-bottom-right-radius: 20%;
@media(max-width: 600px){
    border-top-right-radius: 0%;
    width: 100%;
    height: 50%;
}
`

export const LightBrownSideBar = styled.div`
position: absolute;
right: 65%;
left: 0%;
top: 0%;
bottom: 0%;
background: #BFAF83;
border-top-right-radius: 20%;
border-bottom-right-radius: 20%;
@media(max-width: 600px){
    border-top-right-radius: 0%;
    width: 100%;
    height: 50%;
}
;
`
export const NumberContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 76px;
height: 76px;
background-color: white;
border-radius: 50%;
margin: 10px;
color: black;
font-weight: bolder;
font-size: large;  
@media(max-width: 600px){
    height: 60px;
} 
`

export const DrawNumbers = styled.div`
display: flex;
left: 50%;
margin-top: 10%;
@media(max-width: 600px){
    width: 320px;
    position: relative;
    top: 340px;
    left: 8%;
    right: 45px;
}
`
