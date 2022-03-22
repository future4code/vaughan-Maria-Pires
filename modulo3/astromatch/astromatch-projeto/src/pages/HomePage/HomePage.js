import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { BASE_URL, bodyDislike, bodyLike } from "../../constants/urls";

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
        axios.post(`${BASE_URL}choose-person`, bodyLike)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente mais tarde.")
            })
    }

    const notChoosePerson = (id) => {
        axios.post(`${BASE_URL}choose-person`, bodyDislike)
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
            <ProfileCard prof={profile} like={choosePerson} dislike={notChoosePerson} />
        </div>
    )
}

export default HomePage;