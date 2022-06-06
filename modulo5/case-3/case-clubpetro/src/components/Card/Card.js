import { Button } from "@mui/material";
import { TravelCard } from "./styled";
import ClearIcon from '@mui/icons-material/Clear';

const Card = (props) => {
    return (
            <TravelCard>
                <h2>{props.card.country}</h2>
                <h4>{props.card.local}</h4>
                <h4>{props.card.date}</h4>
                <Button onClick={() => props.removeCard(props.card.id)}><ClearIcon /></Button>
            </TravelCard>
    )
}

export default Card;