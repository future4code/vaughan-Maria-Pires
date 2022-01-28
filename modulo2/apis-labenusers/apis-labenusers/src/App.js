import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaUsuarios from "./components/TelaUsuarios"


export default class App extends React.Component{
    state = {
        telaAtual: "cadastro"
    }

    renderizaTela = () => {
        switch(this.state.telaAtual){
            case "cadastro":
                return <TelaCadastro mudaTela = {this.mudaParaListaUsuarios}/>
            case "usuarios":
                return <TelaUsuarios mudaTela = {this.mudaParaCadastro}/>
            default:
                return <TelaCadastro></TelaCadastro>
        }
    }

    mudaParaListaUsuarios = () => {
        this.setState({
            telaAtual: "usuarios"
        })
    }

    mudaParaCadastro = () => {
        this.setState({
            telaAtual: "cadastro"
        })
    }

    render(){
        return(
            <div>
                {this.renderizaTela()}
            </div>
        )
    }

}