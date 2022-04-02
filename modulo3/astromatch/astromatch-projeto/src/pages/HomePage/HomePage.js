import axios from "axios";
import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
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

    const choosePerson = () => {
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
            <Main profile={profile} choosePerson={choosePerson} notChoosePerson={notChoosePerson}/>
        </div>
    )
}

export default HomePage;