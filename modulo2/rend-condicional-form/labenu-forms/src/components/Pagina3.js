import React from "react";

class Pagina3 extends React.Component {
    state = {
      cursoIncompleto: "",
      cursoComplementar: ""
    };

    onChangeCursoIncompleto = (event) => {
      this.setState({ cursoIncompleto: event.target.value });
    };
  
    onChangeCursoComplementar = (event) => {
      this.setState({ cursoComplementar: event.target.value});
    };

render() {
    return (
    <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
      <p>Por que você não terminou um curso de graduação?</p>
      <input value={this.state.cursoIncompleto} onChange={this.onChangeCursoIncompleto} />

      <p>Você fez algum curso complementar?</p>
      <input value={this.state.cursoComplementar} onChange={this.onChangeCursoComplementar} />

    </div>
  );
}
}

export default Pagina3;