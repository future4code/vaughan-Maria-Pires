import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";


const DetailsPage = () => {
    const [dragonDetails, setDragonDetails] = useState([])
    const params = useParams()

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
    return(
        <>
        <p>Data de criação: {moment(dragonDetails.createdAt).format("DD/MM/YYYY")}</p>
        <p>Nome: {dragonDetails.name}</p>
        <p>Tipo: {dragonDetails.type}</p>

        </>
    )
}

export default DetailsPage;