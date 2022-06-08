import { useNavigate } from "react-router-dom";
import dragao from "../../img/dragao.png"
import { goToDetailsPage } from "../../router/coordinator";
import { Card } from "./styled";


const DragonCard = (props) => {
    const navigate = useNavigate()
    return (
        <Card>
            {props.name}
            <img width="80px" src={dragao} />
            <button onClick={() => goToDetailsPage(navigate, props.id)}>Ver detalhes</button>
        </Card>
    )
}

export default DragonCard;