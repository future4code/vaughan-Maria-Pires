import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class TelaCriarPlaylists extends React.Component{
    state = {
        nome: "",
        musica: ""
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeMusica = (event) => {
        this.setState({musica: event.target.value})
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

    adicionaMusica = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body =  {
            "name": "", 
            "artist": "",
            "url": ""
        }
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}

        axios
        .post(url, body, axiosConfig)
        .then((response) => {
            console.log("Funcionou")
        })
        .catch((response) => {
            console.log("Deu pau")
        })

    }

    render(){
        return(
            <div>
                <button onClick={this.props.voltarHome}>Voltar para a home</button>
                <button onClick={this.props.VerPlaylists}>Suas playlists</button>
                <h1>Criar playlists</h1>
                <input placeholder="Dê um nome a sua playlist" value={this.state.nome} onChange={this.onChangeNome}/>
                <button onClick={this.criaPlaylist}>Adicionar</button>
                <hr/>
                <input placeholder="Adicionar música" value={this.state.musica} onChange={this.onChangeMusica}/>
                <button onClick={this.adicionaMusica}>Adicionar música</button>
            </div>
        )
    }
}