import React from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfile from "../ChooseProfile/ChooseProfile";
import MatchList from "../MatchList/MatchList";
import ResetButton from "../ResetButton/ResetButton";
import { MainContainer, ScreenContainer } from "./styled";


const Main = (props) => {
    return (
        <div>
            <ScreenContainer>
                <MainContainer>
                    <AppBar />
                    <ChooseProfile profile={props.profile} choosePerson={props.choosePerson} notChoosePerson={props.notChoosePerson} />
                    {/*<MatchList  />*/}
                </MainContainer>
            </ScreenContainer>
            <ResetButton />
        </div>
    )
}

export default Main;