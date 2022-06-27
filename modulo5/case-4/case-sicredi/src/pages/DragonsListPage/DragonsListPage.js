import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DragonCard from "../../components/DragonCard/DragonCard";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { goToSignUpDragonPage } from "../../router/coordinator";
import { AddNewDragonButton, ButtonDiv, ScreenContainer } from "./styled";

const DragonsListPage = () => {
    const navigate = useNavigate()
    const [dragonsList, setDragonsList] = useState([])

    const getAllDragons = () => {
        axios.get(`${BASE_URL}`)
            .then((res) => {
                setDragonsList(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getAllDragons()
    })

    const renderDragonsList = dragonsList
    .sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    .map((dragon) => {
        return <DragonCard key={Math.random()} name={dragon.name} id={dragon.id}/>
    })


    return (
        <>
        <Header/>
        <ButtonDiv>
            <AddNewDragonButton
             onClick={() => goToSignUpDragonPage(navigate)}>Adicionar novo dragão à lista
             </AddNewDragonButton>
            </ButtonDiv>
        <ScreenContainer>
            {renderDragonsList}
        </ScreenContainer>
        </>
    )
}

export default DragonsListPage;