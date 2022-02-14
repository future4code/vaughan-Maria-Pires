import React from "react";
import { CardMatchesList } from "./styled";

const MatchesList = (props) => {
    return(
        <CardMatchesList>
            <img height="50px" border-radius="50%" src={props.matchInfos.photo}/>
            <p>{props.matchInfos.name}</p>
        </CardMatchesList>
    )
}

export default MatchesList;