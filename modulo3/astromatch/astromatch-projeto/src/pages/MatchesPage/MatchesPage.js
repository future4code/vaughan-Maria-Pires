import axios from "axios";
import { useEffect, useState } from "react";
import MatchesCard from "../../components/MatchesCard/MatchesCard";
import { ScreenContainer } from "../../components/MatchesCard/styled";
import { BASE_URL } from "../../constants/urls";

const MatchesPage = () => {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get(`${BASE_URL}matches`)
            .then((res) => {
                console.log(res.data)
                setMatches(res.data)
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
            setMatches(res.data)
        })
        .catch((err) => {
            alert("Ocorreu um erro. Tente novamente mais tarde.")
        })
    }
    
    return (
        <ScreenContainer>
            <MatchesCard clear={clear}/>
        </ScreenContainer>
    )
}

export default MatchesPage;