import axios from "axios";
import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import { BASE_URL } from "../../constants/urls";


const MatchesPage = () => {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get(`${BASE_URL}matches`)
            .then((res) => {
                console.log(res.data.matches)
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getMatches()
    }, [])

    const clear = () => {
        axios.put(`${BASE_URL}clear`)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente mais tarde.")
            })
    }

   

    return (
        <div>
            <Main/>
        </div>
    )
}

export default MatchesPage;