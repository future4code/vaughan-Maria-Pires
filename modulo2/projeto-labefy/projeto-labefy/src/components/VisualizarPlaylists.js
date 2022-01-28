import React from "react";
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
                const axiosConfig = {headers:{Authorization:"maria-pires-vaughan"}}
        
                axios.get(url, axiosConfig)
                .then((response) => {
                    this.setState({playlists: response.data.result.list})
        
                })
                .catch((error) => {
                    console.log("Ocorreu um erro. Tente novamente mais tarde.")
                })
        
            }
        
            deletarPlaylists = (id) => {
                const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
                const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}
        
                axios
                .delete(url, axiosConfig)
                .then((response) => {
                    this.pegarPlaylists()
        
                })
                .catch((error) => {
                    console.log(error)
                })
            }
            render(){
                const conjuntoDePlaylists = this.state.playlists.map((pls) => {
                    return <div>
                    <ul>
                    <li>
                    {pls.name}
                    <button onClick={() => this.deletarPlaylists(pls.id)}>X</button>
                    </li>
                    </ul>
                    </div>
                })
                return(
                    <div>
                        <button onClick={this.props.voltarHome}>Voltar para a página inicial</button>
                        <button onClick={this.props.CriarPlaylists}>Criar uma nova playlist</button>
                        <h1>Minhas playlists</h1>
                        {conjuntoDePlaylists}
                        <hr/>
                    </div>
                )
            }
        }