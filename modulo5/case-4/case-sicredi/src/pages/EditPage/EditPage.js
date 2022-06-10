import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, ButtonsDiv, NameInput, ScreenContainer, TypeInput } from "./styled"
import { goToDragonsListPage } from "../../router/coordinator"


const EditPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const editDragon = (id) => {
        const body = {
            "name": name,
            "type": type
        }
        axios.put(`${BASE_URL}/${params.id}`, body)
        .then(() => {
            alert("Dragão atualizado com sucesso!")
        })
        .catch((err) => {
            alert(err.response)
        })
    }

    return(
        <ScreenContainer>
        <h2>Atualizar dragão</h2>
        <NameInput 
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => [setName(e.target.value)]}
        />
        <TypeInput
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => [setType(e.target.value)]}
        />
        <ButtonsDiv>
        <Button onClick={() => [editDragon(params.id), goToDragonsListPage(navigate)]}>Atualizar dragão</Button>
        </ButtonsDiv>
        </ScreenContainer>
    )
}

export default EditPage;

