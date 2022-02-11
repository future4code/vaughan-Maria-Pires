import MatchesList from "../components/MatchesList/MatchesList";
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";


const H1 = styled.h1`
text-align: center;
`
const DivBotao = styled.div`
display: flex;
justify-content: center;
align-items: center;`

export default function MatchesPage(props){

    const [matchesList, setMatchesList] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:maria-pires/matches/`)
        .then((res) => {
            console.log(matchesList)
        })
        .catch((err) => {
            alert("erro")
        })
    }
    const clear = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:maria-pires/clear/")
        .then((res) =>{
            console.log("Apagou")
        })
        .catch((err) => {
            console.log(err)
        })
    }
            return(
            <div>
            <H1>Página de matches</H1>
            <DivBotao>
            <button onClick={() => props.goBackToHomePage("home")}>Voltar para a home</button>
            <button onClick={clear}>Dar reset</button>
            </DivBotao>
            </div>
            )
        }
        
