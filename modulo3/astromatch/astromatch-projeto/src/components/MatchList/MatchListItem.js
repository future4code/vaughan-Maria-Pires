import React from "react";
import { ListItemDiv, ListItemPhoto } from "./styled";

const MatchListItem = () => {
    return(
        <ListItemDiv>
            <ListItemPhoto src={"https://picsum.photos/30/30"}/>
            <p>Nome</p>
        </ListItemDiv>
    )
}

export default MatchListItem;