import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";


const SignUpDragonPage = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const createNewDragon = () => {
        const body = {
            "name": name,
            "type": type
        }

        axios.post(`${BASE_URL}`, body)
        .then((res) => {
            alert(`${name} cadastrado com sucesso!`)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    
    return(
        <>
        Página para cadastrar novo dragão
        <input 
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => [setName(e.target.value)]}
        />
        <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => [setType(e.target.value)]}
        />
        <button onClick={createNewDragon}>Adicionar dragão</button>
        </>
    )
}

export default SignUpDragonPage;