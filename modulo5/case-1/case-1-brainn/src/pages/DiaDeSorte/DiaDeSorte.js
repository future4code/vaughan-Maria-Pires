import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"

const DiaDeSorte = () => {
  const [lotteryContest, setLotteryContest] = useState({})

  const getContests = () => {
    axios.get(`${BASE_URL}/concursos/440`)
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
      <h1>Dia de sorte</h1>
      <h2>Concurso: {lotteryContest.id}</h2>
      <h4>{moment(lotteryContest.data).format("DD/MM/YYYY")}</h4>
      {lotteryContest.numeros && <>
        <a>{lotteryContest.numeros[0]} </a>
        <a>{lotteryContest.numeros[1]} </a>
        <a>{lotteryContest.numeros[2]} </a>
        <a>{lotteryContest.numeros[3]} </a>
        <a>{lotteryContest.numeros[4]} </a>
        <a>{lotteryContest.numeros[5]} </a>
      </>}
    </>
  )
}

export default DiaDeSorte;