import React from "react";
import styled from "styled-components";
import axios from "axios";

const Titulo = styled.h1`
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Div = styled.div`
display: flex;
justify-content: center;
`
const BotaoAdd = styled.button`
width: 150px;
height: 30px;
border-radius: 10px;
margin-left: 10px;
align-content: center;
background-color: #FF6347;
color: black;
`

const MenuHorizontal = styled.div`
display: flex;
justify-content: center;
`

const BotoesMudarPag = styled.button`
width: 140px;
height: 25px;
background-color: black;
color: white;
border-color: black;
margin-right: 10px;
`

export default class TelaCriarPlaylists extends React.Component{
    state = {
        nome: ""
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    criaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {name: this.state.nome}
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}

        axios
        .post(url, body, axiosConfig)
        .then((response) => {
            alert("Playlist criada com sucesso!")
        })
        .catch((error) => {
            alert("Ocorreu um erro. Tente novamente.")
        })
    }

    render(){
        return(
            <div>
                <MenuHorizontal>
                <BotoesMudarPag onClick={this.props.voltarHome}>Voltar para a home</BotoesMudarPag>
                <BotoesMudarPag onClick={this.props.VerPlaylists}>Suas playlists</BotoesMudarPag>
                </MenuHorizontal>
                <Titulo>Criar playlists</Titulo>
                <Div>
                <input placeholder="Dê um nome a sua playlist" value={this.state.nome} onChange={this.onChangeNome}/>
                <BotaoAdd onClick={this.criaPlaylist}>Adicionar</BotaoAdd>
                </Div>
            </div>
        )
    }
}