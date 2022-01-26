import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';


const Div1 = styled.div`
display: flex;
justify-content: flex-start;
padding-left: 8px;
`

const Div2 = styled.div`
display: flex;
justify-content: flex-start;
padding-left: 8px;
padding-top: 8px;
`


class App extends React.Component{
  state = {
    mudaPagina: false,
    nome: "",
    emailContato: "",
    procurarUsuario: ""
  };

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}
    axios
    .get(url, axiosConfig)
    .then((response) => {
      this.setState({nome: response.data.result.list})
    })
    .catch((error) => {
      console.log(error.response)
    })
  }
   

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome, 
      email: this.state.emailContato
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
  searchUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email="
    const axiosConfig = {headers: {Authorization: "maria-pires-vaughan"}}

    axios
    .get(url, axiosConfig)
    .then((response) => {
      
    })
  }
  mudancaTela1 = () => {
    this.setState({
      mudaPagina: true
    })
  }

  mudancaTela2 = () => {
    this.setState({
      mudaPagina: false
    })
  }

  render(){
    const renderizaTela = () => {
      if(this.state.mudaPagina){
        return <div>
          <button onClick={this.mudancaTela2}>Trocar de tela</button>
        <ul>
          <li>Lista de usuários</li>
          </ul>
        <hr/>
        <h3>Procurar usuário</h3>
        <input placeholder="Nome exato para busca"/>
        <button onClick={this.searchUsers}>Salvar edição</button>
    </div>
      } else {
      return (
        <div>
          <Div2>
            <button onClick={this.mudancaTela1}>Trocar de tela</button>
            </Div2>
            <Div1>
            <input placeholder="Nome"/>
            <input placeholder="E-mail"/>
            <button onClick={this.createUser}>Criar usuário</button>
            </Div1>
        </div>
      )
      }
    }
    return <div>{renderizaTela()}</div>
  }
}

export default App