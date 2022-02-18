import React from "react";
import { ButtonsDiv, CartaoProfiles } from "./styled";

const ProfileCard = (props) => {
    return(
        <CartaoProfiles>
            <h3>{props.profList.name}, {props.profList.age}</h3>
            <p>{props.profList.bio}</p>
            <img height="250px"src={props.profList.photo}/>
            <ButtonsDiv>
                <button onClick={props.dislike}>X</button>
                <button onClick={props.like}>♥</button>
            </ButtonsDiv>
        </CartaoProfiles>
    )
}
export default ProfileCard;