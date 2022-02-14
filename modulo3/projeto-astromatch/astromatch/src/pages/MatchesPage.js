import MatchesList from "../components/MatchesList/MatchesList";
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {BASE_URL} from "../constants/urls";
import HomePage from "./HomePage";



const H1 = styled.h1`
text-align: center;
`
const DivBotao = styled.div`
display: flex;
justify-content: center;
align-items: center;`

export default function MatchesPage(props){

    const [matches, setMatches] = useState([
        {}
    ])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(`${BASE_URL}matches`)
        .then((res) => {
            setMatches(res.data.matches)
            console.log(res.data.matches)
        })
        .catch((err) => {
            alert("erro")
        })
    }
    const clear = () => {
        axios.put(`${BASE_URL}clear`)
        .then((res) =>{
            setMatches([])
            console.log(matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    <HomePage></HomePage>
            return(
            <div>
            <H1>Página de matches</H1>
            <DivBotao>
            <button onClick={() => props.goBackToHomePage("home")}>Voltar para a home</button>
            <button onClick={clear()}>Dar reset</button>
            </DivBotao>
            <MatchesList matchInfos = {matches}/>
            </div>
            )
        }
        
