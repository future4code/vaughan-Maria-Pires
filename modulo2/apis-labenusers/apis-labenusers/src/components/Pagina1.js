import React from "react";
import styled from "styled-components";
import App from "../App";
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

class Pagina1 extends React.Component{
    render(){
        return(
            <div>
                <Div2>
                <button onClick={this.trocaTela}>Trocar de tela</button>
                </Div2>
                <Div1>
                <input placeholder="Nome"/>
                <input placeholder="E-mail"/>
                <button>Criar usuário</button>
                </Div1>
            </div>
        )
    }
}

export default Pagina1;