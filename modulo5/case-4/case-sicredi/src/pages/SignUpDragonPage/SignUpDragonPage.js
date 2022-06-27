import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { goToDragonsListPage } from "../../router/coordinator";
import { Button, ButtonsDiv, NameInput, ScreenContainer, TypeInput } from "./styled";


const SignUpDragonPage = () => {
    const navigate = useNavigate()
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
            setName("")
            setType("")
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    
    return(
        <ScreenContainer>
        <h2>Cadastrar novo dragão</h2>
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
        <Button onClick={() => [createNewDragon(), goToDragonsListPage(navigate)]}>Adicionar dragão</Button>
        </ButtonsDiv>
        </ScreenContainer>
    )
}

export default SignUpDragonPage;