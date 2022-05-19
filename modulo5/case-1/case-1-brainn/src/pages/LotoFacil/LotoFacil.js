import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import moment from "moment";
import { DrawNumbers, NumberContainer } from "../../styled/styled";

const LotoFacil = () => {
    const [lotteryContest, setLotteryContest] = useState({})

    const getContests = () => {
        axios.get(`${BASE_URL}/concursos/2200`)
            .then((res) => {
                setLotteryContest(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getContests()
    }, [])
    return (
        <>
            <h1>Loto fácil</h1>
            <h2>Concurso: {lotteryContest.id}</h2>
            <h4>{moment(lotteryContest.data).format("DD/MM/YYYY")}</h4>
            <DrawNumbers>
                {lotteryContest.numeros && <>
                    <NumberContainer>{lotteryContest.numeros[0]}</NumberContainer>
                    <NumberContainer>{lotteryContest.numeros[1]}</NumberContainer>
                    <NumberContainer>{lotteryContest.numeros[2]}</NumberContainer>
                    <NumberContainer>{lotteryContest.numeros[3]}</NumberContainer>
                    <NumberContainer>{lotteryContest.numeros[4]}</NumberContainer>
                    <NumberContainer>{lotteryContest.numeros[5]}</NumberContainer>
                </>}
            </DrawNumbers>
        </>
    )
}

export default LotoFacil;