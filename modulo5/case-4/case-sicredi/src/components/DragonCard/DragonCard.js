import dragao from "../../img/dragao.png"
import { Card } from "./styled";


const DragonCard = (props) => {
    return(
        <Card>
        {props.name}
        <img width="80px" src={dragao}/>
        </Card>       
    )
}

export default DragonCard;