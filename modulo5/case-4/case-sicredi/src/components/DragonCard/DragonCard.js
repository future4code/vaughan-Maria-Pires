import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import dragao from "../../img/dragao.png"
import { goToDetailsPage, goToEditPage } from "../../router/coordinator";
import { Buttons, Card, DivButtons, EditButton } from "./styled";


const DragonCard = (props) => {
    const navigate = useNavigate()


    const deleteDragon = (id) => {
        axios.delete(`${BASE_URL}/${id}`)
            .then((res) => {
                alert(`${props.name} deletado com sucesso!`)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <Card>
            <h4>{props.name}</h4>
            <img width="80px" alt="ilustração de um dragão" src={dragao} />
            <br/>
            <DivButtons>
                <Buttons onClick={() => goToDetailsPage(navigate, props.id)}>Detalhes</Buttons>
                <Buttons onClick={() => deleteDragon(props.id)}>X</Buttons>
            </DivButtons>
            <EditButton onClick={() => goToEditPage(navigate, props.id)}>Editar</EditButton>
        </Card>
    )
}

export default DragonCard;