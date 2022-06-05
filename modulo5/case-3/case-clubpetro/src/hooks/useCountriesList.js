import { useEffect, useState } from "react";
import axios from "axios";

const useCountriesList = () => {
    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.com/v2/all")
        .then((res) => {
            setCountriesList(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])

    return countriesList
}

export default useCountriesList;