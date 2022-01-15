import React from 'react';


class App extends React.Component {
  state = {
    whatslab: [
      {
        usuario: "",
        conteudo: ""
      },
    ],
    valorInputUsuario: "",
    valorInputConteudo: ""
  };
  
  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      conteudo: this.state.valorInputConteudo
    };

  const mensagensNovas  = [...this.state.whatslab, novaMensagem];
    this.setState({ whatslab: mensagensNovas });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputConteudo = (event) => {
    this.setState({ valorInputConteudo: event.target.value });
  };

  render() {
    const arrayDeMensagens = this.state.whatslab.map((mensagem) => {
      return (
        <p>
          {mensagem.usuario} - {mensagem.conteudo}
        </p>
      );
    });
    return (
      <div>
        <h2>Whatslab</h2>
        <div>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputConteudo}
            onChange={this.onChangeInputConteudo}
            placeholder={"Mensagem"}
          />
          <button onClick={this.enviaMensagem}>Enviar</button>
        </div>
        <div>{arrayDeMensagens}</div>
      </div>
    );
  }
}


  

export default App;
