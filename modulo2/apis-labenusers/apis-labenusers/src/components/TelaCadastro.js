import axios from "axios";
import React from "react";
import styled from "styled-components";

const Div1 = styled.div`
display: flex;
justify-content: flex-start;
padding-top: 8px;
padding-left: 8px;
`

const Div2 = styled.div`
display: flex;
padding-left: 8px;`


export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    criarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}
    axios
    .post(url, body, axiosConfig)
    .then((response) => {
      alert("Usuário criado com sucesso")
      this.getAllUsers()
    })

    .catch((error) => {
      alert("Erro ao criar o usuário")
    })
  }

    render(){
        return(
            <div>
                <Div1>
                <button onClick={this.props.mudaTela}>Trocar de tela</button>
                </Div1>
                <Div2>
                <input 
                placeholder="Nome"
                value = {this.state.nome}
                onChange = {this.onChangeNome}
                />
                <input 
                placeholder="E-mail"
                value = {this.state.email}
                onChange={this.onChangeEmail}
                />
                <button onClick={this.criarUsuario}>Criar usuário</button>
                </Div2>
            </div>
        )
    }
}