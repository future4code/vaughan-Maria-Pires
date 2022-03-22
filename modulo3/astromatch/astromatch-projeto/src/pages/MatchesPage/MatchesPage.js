import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";

const MatchesPage = () => {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get(`${BASE_URL}matches`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getMatches()
    }, [])



    return (
        <div>
            <h1>Página dos matches</h1>
        </div>
    )
}

export default MatchesPage;