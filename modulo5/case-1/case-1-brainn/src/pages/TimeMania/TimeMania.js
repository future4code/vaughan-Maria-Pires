import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import { DrawNumbers, NumberContainer } from "../../styledGeneral/styled"
import { H4, H4Mobile, TimeManiaSubtitleDiv, TimeManiaTitle } from "./styled"

const TimeMania = () => {
  const [lotteryContest, setLotteryContest] = useState({})

  const getContests = () => {
    axios.get(`${BASE_URL}/concursos/1622`)
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
      <TimeManiaTitle>TIMEMANIA</TimeManiaTitle>
      <TimeManiaSubtitleDiv>
        <H4>CONCURSO</H4>
        <H4>{lotteryContest.id} - {moment(lotteryContest.data).format("DD/MM/YYYY")}</H4>
        <H4Mobile>CONCURSO Nº {lotteryContest.id}</H4Mobile>
      </TimeManiaSubtitleDiv>
      <DrawNumbers>
        {lotteryContest.numeros && <>
          <NumberContainer>{lotteryContest.numeros[0]} </NumberContainer>
          <NumberContainer>{lotteryContest.numeros[1]} </NumberContainer>
          <NumberContainer>{lotteryContest.numeros[2]} </NumberContainer>
          <NumberContainer>{lotteryContest.numeros[3]} </NumberContainer>
          <NumberContainer>{lotteryContest.numeros[4]} </NumberContainer>
          <NumberContainer>{lotteryContest.numeros[5]} </NumberContainer>
        </>}
      </DrawNumbers>

    </>
  )
}

export default TimeMania;