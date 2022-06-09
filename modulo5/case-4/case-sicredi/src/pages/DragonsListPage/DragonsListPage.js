import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DragonCard from "../../components/DragonCard/DragonCard";
import { BASE_URL } from "../../constants/urls";
import { goToSignUpDragonPage } from "../../router/coordinator";
import { ScreenContainer } from "./styled";

const DragonsListPage = () => {
    const navigate = useNavigate()
    const [dragonsList, setDragonsList] = useState([])

    const getAllDragons = () => {
        axios.get(`${BASE_URL}`)
            .then((res) => {
                setDragonsList(res.data)
                console.log(res.data)
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
        return <DragonCard key={dragon.id} name={dragon.name} id={dragon.id}/>
    })


    return (
        <ScreenContainer>
            {renderDragonsList}
            <div><button onClick={() => goToSignUpDragonPage(navigate)}>Adicionar novo dragão à lista</button></div>
        </ScreenContainer>
    )
}

export default DragonsListPage;