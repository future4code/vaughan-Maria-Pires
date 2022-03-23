import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { BASE_URL } from "../../constants/urls";
import { ButtonContainer, CenterLoading } from "./styled";



const HomePage = () => {
    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getProfileToChoose = () => {
        axios.get(`${BASE_URL}person`)
            .then((res) => {
                setProfile(res.data.profile)
                console.log(res.data.profile)
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error)
            })
    }

    const choosePerson = (id) => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios.post(`${BASE_URL}choose-person`, body)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente mais tarde.")
            })
    }

    const notChoosePerson = () => {
        const body = {
            id: profile.id,
            choice: false
        }
        axios.post(`${BASE_URL}choose-person`, body)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente mais tarde.")
            })
    }


    useEffect(() => {
        getProfileToChoose()
    }, [])

    return (
        <div>
            {
                isLoading ? <CenterLoading><CircularProgress/></CenterLoading> :<ProfileCard prof={profile} like={choosePerson} dislike={notChoosePerson}/> 
            }
            <ButtonContainer>
            </ButtonContainer>
        </div>
    )
}

export default HomePage;