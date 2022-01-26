import React from "react";
import styled from "styled-components";
import axios from "axios";

const Padding = styled.div`
padding-left: 8px`


export default class TelaUsuarios extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}

        axios
        .get(url, axiosConfig)
        .then((response) => {
            this.setState({usuarios: response.data})

        })
        .catch((error) => {

        })

    }

    procurarUsuarios = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?${this.state.nome}=&email=`
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}

        axios
        .get(url, axiosConfig)
        .then((response) => {
            this.setState({usuarios: response.data})
        })
        .catch((error) => {
        })

    }

    deletarUsuarios = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}

        axios
        .delete(url, axiosConfig)
        .then((response) => {
            this.pegarUsuarios()

        })
        .catch((error) => {

        })
    }
    render(){
        const listaDeUsuarios = this.state.usuarios.map((usuario) => {
            return <div>
            <ul>
            <li>
            {usuario.name}
            <button onClick={() => this.deletarUsuarios(usuario.id)}>X</button>
            </li>
            </ul>
            </div>
        })
        return(
            <div>
            <Padding>
                <button onClick={this.props.mudaTela}>Trocar de tela</button>
                {listaDeUsuarios}
                </Padding>
                <hr/>
                <Padding>
                <h3>Procurar usuário</h3>
                <input placeholder="Nome exato para busca"/>
                <button onClick={this.procurarUsuarios}>Salvar edição</button>
                </Padding>
            </div>
        )
    }
}