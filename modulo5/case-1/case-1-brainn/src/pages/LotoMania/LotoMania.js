import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { NumberContainer } from "../../styled/styled";

const LotoMania = () => {
  const [lotteryContest, setLotteryContest] = useState({})

  const getContests = () => {
    axios.get(`${BASE_URL}/concursos/2167`)
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
      <h1>Loto Mania</h1>
      <h2>Concurso: {lotteryContest.id}</h2>
      <h4>{moment(lotteryContest.data).format("DD/MM/YYYY")}</h4>
      {lotteryContest.numeros && <>
        <NumberContainer>{lotteryContest.numeros[0]}</NumberContainer>
        <NumberContainer>{lotteryContest.numeros[1]}</NumberContainer>
        <NumberContainer>{lotteryContest.numeros[2]} </NumberContainer>
        <NumberContainer>{lotteryContest.numeros[3]} </NumberContainer>
        <NumberContainer>{lotteryContest.numeros[4]} </NumberContainer>
            </>}
    </>
  )
}

export default LotoMania;