import React from "react";
import styled from "styled-components";
import axios from "axios";

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
            this.getAllUsers()
        })
        .catch((error) => {
            alert("Ocorreu um erro. Tente novamente.")
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
            </div>
        )
    }
}