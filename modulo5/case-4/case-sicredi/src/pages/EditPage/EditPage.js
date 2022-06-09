import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useState } from "react"
import { useParams } from "react-router-dom"


const EditPage = () => {
    const params = useParams()
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const editDragon = (id) => {
        const body = {
            "name": name,
            "type": type
        }
        axios.post(`${BASE_URL}/${params.id}`, body)
        .then(() => {
            alert("Dragão atualizado com sucesso!")
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return(
        <>
        Atualizar dragão
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
        <button onClick={() => editDragon(params.id)}>Atualizar dragão</button>
        </>
    )
}

export default EditPage;

