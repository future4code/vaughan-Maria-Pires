import React from "react";
import MatchListItem from "./MatchListItem";
import { MatchListDiv } from "./styled";

const MatchList = () => {
    return(
        <MatchListDiv>
            <MatchListItem/>
            <MatchListItem/>
            <MatchListItem/>
            <MatchListItem/>
        </MatchListDiv>
    )
}

export default MatchList;