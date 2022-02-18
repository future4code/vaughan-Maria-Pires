import React from "react";
import axios from "axios";

export default class TelaPlaylists extends React.Component{ 
    state = {
        nomeDaMusica: "",
        artista: "",
        link: ""
    }

    componentDidMount() {
        this.pegarPlaylists()
    }
      
    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const axiosConfig = {headers:{Authorization:"maria-pires-vaughan"}}

        axios.get(url, axiosConfig)
        .then((response) => {
            this.setState({playlists: response.data.result.list})

        })
        .catch((error) => {
            console.log("Ocorreu um erro. Tente novamente mais tarde.")
        })

    }

    adicionaMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`  
        const body = (
            {name: this.state.nomeDaMusica},
            {artist: this.state.artista},
            {url: this.state.link}
        )
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}
        
        axios
        .post(url, body, axiosConfig)
        .then((response) => {
        
        })
        .catch((error) => {
            console.log("ERRO")
        })
       }
    render(){
        return(
            <div>
                <input placeholder="Nome da música"/>
                <input placeholder="Artista"/>
                <input placeholder="URL"/>
                <button onClick={() => this.adicionaMusica()}>Adicionar</button>

            </div>
        )
    }
}