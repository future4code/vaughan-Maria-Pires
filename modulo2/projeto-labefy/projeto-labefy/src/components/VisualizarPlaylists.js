import React from "react";
import axios from "axios";
import styled from "styled-components";

const Titulo = styled.h1`
text-align: center;
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

const Lista = styled.div`
border: 2px solid #FF6347;
width: 400px;
display: flex;
flex-direction: column;
margin: 0 auto;
`


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

            pegarMusicasDasPlaylists = (id) => {
                const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`  
                const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}
                
                axios
                .get(url, axiosConfig)
                .then((response) => {
                    this.pegarPlaylists()
                })
                .catch((error) => {
                    console.log("ERRO")
                })
               }

            render(){
                const conjuntoDePlaylists = this.state.playlists.map((pls) => {
                    return <div>
                    <ul>
                    <li>
                    {pls.name}
                    <button onClick={() => this.deletarPlaylists(pls.id)}>X</button>
                    <button onClick={this.props.detalhes}{...this.pegarMusicasDasPlaylists(pls.id)}>+</button>
                    </li>
                    </ul>
                    </div>
                })
                return(
                    <div>
                        <MenuHorizontal>
                        <BotoesMudarPag onClick={this.props.voltarHome}>Voltar para a home</BotoesMudarPag>
                        <BotoesMudarPag onClick={this.props.CriarPlaylists}>Criar nova playlist</BotoesMudarPag>
                        </MenuHorizontal>
                        <Titulo>Minhas playlists</Titulo>
                        <Lista>{conjuntoDePlaylists}</Lista>
                    </div>
                )
            }
        }