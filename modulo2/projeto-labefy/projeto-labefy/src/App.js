import React from "react";
import styled from "styled-components";
import axios from "axios";
import TelaCriarPlaylists from "./components/TelaCriarPlaylists";
import VisualizarPlaylists from "./components/VisualizarPlaylists";
import Home from "./Home";


export default class App extends React.Component{
  state = {
    telaAtual: "home"
  }

  renderizaTela = () => {
    switch(this.state.telaAtual){
      case "home":
        return <Home CriarPlaylists = {this.mudaParaCriarPlaylists} VerPlaylists = {this.mudaParaVisualizarPlaylists}/>
      case "criarPlaylists":
      return <TelaCriarPlaylists VerPlaylists = {this.mudaParaVisualizarPlaylists} voltarHome = {this.voltarHome}/>
      case "abrirPlaylists":
      return <VisualizarPlaylists CriarPlaylists = {this.mudaParaCriarPlaylists}  voltarHome = {this.voltarHome}/>
    }
  }

  voltarHome = () => {
    this.setState({
      telaAtual: "home"
    })
  }

  mudaParaCriarPlaylists = () => {
    this.setState({
      telaAtual: "criarPlaylists"
    })
  }

  mudaParaVisualizarPlaylists = () => {
    this.setState({
      telaAtual: "abrirPlaylists"
    })
  }

  render(){
    return(
      <div>
        {this.renderizaTela()}
      </div>
    )
  }
}