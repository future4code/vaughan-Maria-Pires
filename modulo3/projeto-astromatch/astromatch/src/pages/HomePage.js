import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, bodyDislike, bodyLike } from "../constants/urls";
import ProfileCard from "../components/ProfileCard/ProfileCard";


const H1 = styled.h1`
text-align: center;
`
const DivBotao = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export default function HomePage(props) {

    const [profilesList, setProfilesList] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])
    
    const getProfileToChoose = () => {
        axios.get(`${BASE_URL}person`)
            .then((res) => {
                setProfilesList(res.data.profile)
            })
            .catch((error) => {
                alert(error)
            })
    }

    const choosePerson = (id) => {
        axios.post(`${BASE_URL}choose-person`, bodyLike)
            .then((res) => {
                console.log(`Você curtiu ${profilesList.name}`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const notChoosePerson = (id) => {
        axios.post(`${BASE_URL}choose-person`, bodyDislike)
        .then((res) => {
            console.log(`Você não curtiu ${profilesList.name}`)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    console.log("profiles", profilesList)
    return (
        <div>
            <div>
                <H1>Astromatch</H1>            
            </div>
            <DivBotao>
                    <button onClick={() => props.goToMatchesPage("matches")}>Ir para a página de matches</button>
                </DivBotao>
            {
                profilesList.id ? <ProfileCard profList={profilesList} like={choosePerson} dislike={notChoosePerson} /> : <p>Carregando...</p>
            }
        </div>
    )
}
