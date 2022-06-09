import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import dragao from "../../img/dragao.png"
import { goToDetailsPage, goToEditPage } from "../../router/coordinator";
import { Card } from "./styled";


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
            {props.name}
            <img width="80px" alt="ilustração de um dragão" src={dragao} />
            <button onClick={() => goToDetailsPage(navigate, props.id)}>Ver detalhes</button>
            <button onClick={() => deleteDragon(props.id)}>X</button>
            <button onClick={() => goToEditPage(navigate, props.id)}>Editar</button>
        </Card>
    )
}

export default DragonCard;