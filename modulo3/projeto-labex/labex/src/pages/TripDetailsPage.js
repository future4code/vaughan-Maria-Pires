import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../constants/urls";



export const TripDetailsPage = () => {
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get(`${BASE_URL}/trip/`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h1>Trip Details Page</h1>
        </div>
    )
}