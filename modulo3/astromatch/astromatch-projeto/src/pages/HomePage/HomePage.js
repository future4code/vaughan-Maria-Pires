import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { BASE_URL } from "../../constants/urls";

const HomePage = () => {
    const [profile, setProfile] = useState({})

    const getProfileToChoose = () => {
        axios.get(`${BASE_URL}person`)
            .then((res) => {
                setProfile(res.data.profile)
                console.log(res.data.profile)
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
                profile.id ? <ProfileCard prof={profile} like={choosePerson} dislike={notChoosePerson}/> : <p>Carregando...</p>
            }
        </div>
    )
}

export default HomePage;