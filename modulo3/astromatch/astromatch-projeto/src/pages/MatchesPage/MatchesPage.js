import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import MatchesCard from "../../components/MatchesCard/MatchesCard";
import { ScreenContainer } from "../../components/MatchesCard/styled";
import { BASE_URL } from "../../constants/urls";
import { CenterLoading } from "./styled";

const MatchesPage = () => {
    const [matches, setMatches] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMatches = () => {
        axios.get(`${BASE_URL}matches`)
            .then((res) => {
                console.log(res.data)
                setMatches(res.data)
                setIsLoading(false)
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
            { isLoading ? 
            <CenterLoading>
                <CircularProgress/>
            </CenterLoading>
            : <MatchesCard clear={clear}/>
            
            }
        </ScreenContainer>
    )
}

export default MatchesPage;