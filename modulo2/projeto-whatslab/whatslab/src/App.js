import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
display: flex;
border: 1px solid black;
align-items: flex-end;
height: 100vh;
width: 600px;
margin-left: 320px;
`
const InputNome = styled.input`
width: 100px;
`

const InputMensagem = styled.input`
width: 430px;
`

/*Fiquei mexendo na div do array de mensagens pelo styled-components, 
mas não consegui deixar no lugar certo e no surge ficou tudo diferente 
do que tava aparecendo aqui quando eu rodava o npm run start.
*/

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

const mensagensNovas = [...this.state.whatslab, novaMensagem];
this.setState({ whatslab: mensagensNovas });
this.setState({ valorInputUsuario: "", valorInputConteudo: "" });
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
{mensagem.usuario}: {mensagem.conteudo}
</p>
)});

return (
  <AppContainer>
    <div>
      <InputNome
      value={this.state.valorInputUsuario}
      onChange={this.onChangeInputUsuario}
      placeholder={"Nome"}
      />
      
      <InputMensagem
      value={this.state.valorInputConteudo}
      onChange={this.onChangeInputConteudo}
      placeholder={"Mensagem"}
      />
  <button onClick={this.enviaMensagem}>Enviar</button>
  </div>
 <div>{arrayDeMensagens}</div>
 </AppContainer>
  );
  }
}


export default App;
