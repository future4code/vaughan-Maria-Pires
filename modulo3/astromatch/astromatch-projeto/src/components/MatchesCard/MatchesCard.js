import { Button } from "@material-ui/core";
import People from "@material-ui/icons/People";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { CardContainer, CardContent, CardHeader, CardImage } from "./styled";

const MatchesCard = (props) => {
    const navigate = useNavigate()
    return (
        <CardContainer>
            <CardHeader>
                <Button onClick={() => goToHomePage(navigate)}><People /></Button>
                <h2>Astromatch</h2>
            </CardHeader>
            <button onClick={props.clear}>Apagar todos os matches</button>
        </CardContainer>
    )
}

export default MatchesCard;