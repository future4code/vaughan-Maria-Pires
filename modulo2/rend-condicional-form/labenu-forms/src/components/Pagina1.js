import React from "react";
import styled from "styled-components";


class Pagina1 extends React.Component {
    state = {
      nome: "",
      idade: "",
      email: "",
      escolaridade: ""
    };

    onChangeNome = (event) => {
      this.setState({ nome: event.target.value });
    };
  
    onChangeIdade = (event) => {
      this.setState({ idade: Number(event.target.value) });
    };
  
    onChangeEmail = (event) => {
      this.setState({ email: event.target.value});
    };

  
  
    render() {
        return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
          <p>Qual o seu nome?</p>
          <input value={this.state.nome} onChange={this.onChangeNome} />
  
          <p>Qual sua idade?</p>
          <input value={this.state.idade} onChange={this.onChangeIdade} />
  
          <p>Qual seu e-mail?</p>
          <input value={this.state.email} onChange={this.onChangeEmail} />

      
        </div>
      );
    }
  }
  
  export default Pagina1;
  