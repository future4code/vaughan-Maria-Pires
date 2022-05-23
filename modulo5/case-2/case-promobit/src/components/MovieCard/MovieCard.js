import { CardContainer } from "./styled";
import moment from "moment";

const MovieCard = (props) => {
    return(
        <CardContainer>
            <img src={props.imgSrc}/>
            <p>{props.title}</p>
            <p>{moment(props.date).format("DD/MM/YYYY")}</p>
        </CardContainer>
    )
}

export default MovieCard;