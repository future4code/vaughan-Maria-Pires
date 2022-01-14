import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
  height: 250px;
  width: 250px;
  grid-template-columns: 80px 1fr;
`

class App extends React.Component {
state = {
  postagens: [
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Duda",
      fotoUsuario: "https://picsum.photos/50/52",
      fotoPost: "https://picsum.photos/200/152"
    },
    {
      nomeUsuario: "Marcela",
      fotoUsuario: "https://picsum.photos/50/54",
      fotoPost: "https://picsum.photos/200/154"
    }
  ],
  valorInformacao1: "",
  valorInformacao2: "",
  valorInformacao3: ""
};

adicionaPost = () => {
  const novoPost = {
    info1: this.state.valorInformacao1,
    info2: this.state.valorInformacao2,
    info3: this.state.valorInformacao3
  };
  
  const postagensNovas = [...this.state.postagens, novoPost];
    this.setState({ postagens: postagensNovas });
  };

  onChangeInputInfo1 = (event) => {
    this.setState({ valorInformacao1: event.target.value });
  };

  onChangeInputInfo2 = (event) => {
    this.setState({ valorInformacao2: event.target.value });
  };

  onChangeInputInfo3 = (event) => {
    this.setState({ valorInformacao3: event.target.value });
  };

render () {
  const listaDePosts = this.state.postagens.map((post) => {
    return (
      <div>
        <MainContainer>
      {post.nomeUsuario}
       <img src={post.fotoUsuario}></img>
       <img src={post.fotoPost}></img>
       </MainContainer>
      </div>
      );
    });

  return (
    <div className="App">
    <h1>Insta4</h1>
    <input
      onChange={this.state.valorInformacao1}
      value={this.onChangeInputInfo1}
      placeholder="Informação 1"
    />
    <input
      onChange={this.state.valorInformacao2}
      value={this.onChangeInputInfo2}
      placeholder="Informação 2"
    />

    <input
      onChange={this.state.valorInformacao3}
      value={this.onChangeInputInfo3}
      placeholder="Informação 3"
      />
    <button onClick={this.adicionaPost}>Adicionar post</button>
    {listaDePosts}
  </div>
);
}
}
  
  

export default App;
