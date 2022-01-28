import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class VisualizarPlaylists extends React.Component{
    state = {
        playlists: []
    }
    
    componentDidMount() {
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}

        axios
        .get(url, axiosConfig)
        .then((response) => {
            this.setState({playlists: response.data})
           
        })
        .catch((error) => {
            alert("Ocorreu um erro. Tente novamente mais tarde.")
        })

    }
    render(){
        return(
            <div>
                <button onClick={this.props.CriarPlaylists}>Criar um nova playlist</button>
                <button onClick={this.props.voltarHome}>Voltar para a página inicial</button>
                <h1>Visualizar as playlists</h1>
                {this.pegarPlaylists()}
            </div>
        )
    }
}