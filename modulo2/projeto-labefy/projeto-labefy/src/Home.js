import React from "react";
import styled from "styled-components";



export default class Home extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.CriarPlaylists}>Criar uma nova playlist</button>
                <button onClick={this.props.VerPlaylists}>Visualizar playlists existentes</button>
            </div>
            
        )
    }
}