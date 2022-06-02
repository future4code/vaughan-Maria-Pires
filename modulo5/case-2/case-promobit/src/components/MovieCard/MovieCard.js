import { Button } from "@material-ui/core";
import { CardContainer, Img, P, ReleaseDate } from "./styled";
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
            <Button onClick={() => onClickMovie(props.movieId)}><Img src={props.imgSrc}/></Button>
            <P>{props.title}</P>
            <ReleaseDate>{moment(props.date).format("MMM Do YY").toLocaleUpperCase()}</ReleaseDate>
        </CardContainer>
    )
}

export default MovieCard;