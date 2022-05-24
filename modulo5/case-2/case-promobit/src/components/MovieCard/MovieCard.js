import { Button } from "@material-ui/core";
import { CardContainer } from "./styled";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../Router/coordinator";

const MovieCard = (props) => {
    const navigate = useNavigate()

    const onClickMovie = (id) => {
        goToDetailsPage(navigate, id)
    }
    return(
        <CardContainer>
            <Button onClick={() => onClickMovie(props.movieId)}><img src={props.imgSrc}/></Button>
            <p>{props.title}</p>
            <p>{moment(props.date).format("MMM Do YY")}</p>
        </CardContainer>
    )
}

export default MovieCard;