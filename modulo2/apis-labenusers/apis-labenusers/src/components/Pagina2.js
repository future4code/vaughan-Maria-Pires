import React from "react";

class Pagina2 extends React.Component{
    render(){
        return(
            <div>
                <li>Lista de usuários</li>
                <hr/>
                <h3>Procurar usuário</h3>
                <input placeholder="Nome exato para busca"/>
                <button>Salvar edição</button>
            </div>
        )
    }
}

export default Pagina2;