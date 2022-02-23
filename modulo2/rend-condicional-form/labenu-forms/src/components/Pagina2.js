import React from "react";

class Pagina2 extends React.Component {
    state = {
      curso: "",
      instituicao: ""
    };

    onChangeCurso = (event) => {
      this.setState({ curso: event.target.value });
    };
  
    onChangeInstituicao = (event) => {
      this.setState({ instituicao: event.target.value});
    };

render() {
    return (
    <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
      <p>Qual curso?</p>
      <input value={this.state.curso} onChange={this.onChangeCurso} />

      <p>Qual a unidade de ensino?</p>
      <input value={this.state.instituicao} onChange={this.onChangeInstituicao} />

    </div>
  );
}
}

export default Pagina2;