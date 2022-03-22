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
    
    return (
        <ScreenContainer>
            <MatchesCard/>
        </ScreenContainer>
    )
}

export default MatchesPage;