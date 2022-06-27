import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { Button, DetailsCard, Img, ScreenContainer } from "./styled";
import dragaoV from "../../img/dragaoV.png"

const DetailsPage = () => {
    const [dragonDetails, setDragonDetails] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    const getDragonsDetails = () => {
        axios.get(`${BASE_URL}/${params.id}`)
            .then((res) => {
                setDragonDetails(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getDragonsDetails();
    })
    return (
        <ScreenContainer>
            <DetailsCard>
                <p><b>Data de criação</b>: {moment(dragonDetails.createdAt).format("DD/MM/YYYY")}</p>
                <p><b>Nome</b>: {dragonDetails.name}</p>
                <p><b>Tipo</b>: {dragonDetails.type}</p>
                <Img src={dragaoV}/>
                <Button onClick={() => navigate(-1)}>Voltar à lista</Button>
            </DetailsCard>
        </ScreenContainer>
    )
}

export default DetailsPage;