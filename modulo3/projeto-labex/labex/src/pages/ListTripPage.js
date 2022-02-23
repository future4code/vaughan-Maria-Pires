import React, { useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import TripList from "../components/TripList/TripList";

export const ListTripPage = () => {
    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("data", res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const navigate = useNavigate()
    const goToApplicationFormPage = () => {
        navigate("../trips/application")    
    }
    return(
        <div>
            <h1>ListTripPage</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            <TripList/>
        </div>
    )
}