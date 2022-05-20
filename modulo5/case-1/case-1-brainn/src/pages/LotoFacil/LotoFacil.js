import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import moment from "moment";
import { DrawNumbers, NumberContainer } from "../../styledComponents/styled";
import { H4, LotoFacilSubtitleDiv, LotoFacilTitle } from "./styled";

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
            <LotoFacilTitle>LOTOFÁCIL</LotoFacilTitle>
            <LotoFacilSubtitleDiv>
            <H4>CONCURSO</H4> 
            <H4>{lotteryContest.id} - {moment(lotteryContest.data).format("DD/MM/YYYY")}</H4>
            </LotoFacilSubtitleDiv>
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