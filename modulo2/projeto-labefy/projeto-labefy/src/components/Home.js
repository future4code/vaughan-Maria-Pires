import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const BotoesHome = styled.button`
width: 300px;
height: 50px;
margin-bottom: 40px;
border-radius: 10px;
align-content: center;
background-color: #FF6347;
color: black;
`

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center`



export default class Home extends React.Component{
    render(){
        return(
            <div>
            <Div>
                <Titulo>Labefy</Titulo>
                <BotoesHome onClick={this.props.CriarPlaylists}>Criar uma nova playlist</BotoesHome>
                <BotoesHome onClick={this.props.VerPlaylists}>Visualizar playlists existentes</BotoesHome>
                </Div>
            </div>
            
        )
    }
}