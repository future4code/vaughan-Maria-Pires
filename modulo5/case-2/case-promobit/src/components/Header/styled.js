import styled from "styled-components";

export const TMDBHeader = styled.header`
display: flex;
align-items: center;
height: 8vh;
background-color: #5C16C5;
color: white;
`

export const HeaderTitle = styled.h3`
margin-left: 65px;
color: white;
@media(max-width: 600px){
    margin-left: 130px;
} 
`

export const TMDBShape = styled.div`
width: 55px;
height: 20px;
border-radius: 40%;
background-color: white;
margin-left: 5px;
@media(max-width: 600px){
    position: absolute;
    left: 50%;
} 
`

export const TMDBNavBar = styled.div`
width: 100%;
height: 300px;
display: grid;
align-items: center;
background-color: #2D0C5E;
color: white;  
@media(max-width: 600px){
    width: 100%;
    height: 370px;
    display: grid;
    justify-content: center;

}
`
export const Text = styled.h1`
font-size: 48px;
margin-top: 80px;
text-align: center;
@media(max-width: 600px){
    position: absolute;
    top: 15px;
    font-size: 28px;
} 
 
`

export const P = styled.p`
text-align: center;
text-transform: uppercase;
@media(max-width: 600px){
    position: absolute;
    top: 30%;
    left: 38%;
}
`

export const Button = styled.button`
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;    
`