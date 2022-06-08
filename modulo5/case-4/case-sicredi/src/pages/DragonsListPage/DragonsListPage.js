import axios from "axios";
import { useEffect, useState } from "react";
import DragonCard from "../../components/DragonCard/DragonCard";
import { BASE_URL } from "../../constants/urls";
import { ScreenContainer } from "./styled";

const DragonsListPage = () => {
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
        return <DragonCard key={dragon.id} name={dragon.name}/>
    })


    return (
        <ScreenContainer>
            {renderDragonsList}
        </ScreenContainer>
    )
}

export default DragonsListPage;