import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/urls';

const Quina = () => {
  const [lotteryContest, setLotteryContest] = useState({})

  const getContests = () => {
    axios.get(`${BASE_URL}/concursos/5534`)
      .then((res) => {
        setLotteryContest(res.data)
      })
      .catch((err) => {
        alert(err.response)
      })
  }

  useEffect(() => {
    getContests()
  }, [])
  return (
    <>
      <h1>Quina</h1>
      <h2>Concurso: {lotteryContest.id}</h2>
      <h4>{moment(lotteryContest.data).format("DD/MM/YYYY")}</h4>
      {lotteryContest.numeros && <>
        <a>{lotteryContest.numeros[0]}</a>
        <a>{lotteryContest.numeros[1]}</a>
        <a>{lotteryContest.numeros[2]} </a>
        <a>{lotteryContest.numeros[3]} </a>
        <a>{lotteryContest.numeros[4]} </a>
      </>}

    </>
  )
}

export default Quina;