import './App.css';
import { MenuItem, Select } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MegaSena from "../src/pages/MegaSena/MegaSena";
import Quina from "../src/pages/Quina/Quina";
import LotoFacil from "../src/pages/LotoFacil/LotoFacil";
import LotoMania from "../src/pages/LotoMania/LotoMania";
import TimeMania from "../src/pages/TimeMania/TimeMania";
import DiaDeSorte from "../src/pages/DiaDeSorte/DiaDeSorte";
import { BASE_URL } from './constants/urls';


function App() {
  const [lottery, setLottery] = useState("");
  const [selectLottery, setSelectLottery] = useState("");
  const [megaSenaContentVisible, setMegaSenaContentVisible] = useState(false);
  const [quinaContentVisible, setQuinaContentVisible] = useState(false);
  const [lotoFacilContentVisible, setLotoFacilContentVisible] = useState(false);
  const [lotoManiaContentVisible, setLotoManiaContentVisible] = useState(false);
  const [timeManiaContentVisible, setTimeManiaContentVisible] = useState(false);
  const [diaDeSorteContentVisible, setDiaDeSorteContentVisible] = useState(false);


  const getLotteries = () => {
    axios.get(`${BASE_URL}/loterias`)
      .then((res) => {
        setSelectLottery(res.data)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const handleSetLottery = (event) => {
    setLottery(event.target.value);
  }

  const mappedLotteries = !selectLottery ? [] : selectLottery.map((lottery) => {
    return <MenuItem key={lottery.id} value={lottery.nome}>{lottery.nome}</MenuItem>
  })

  useEffect(() => {
    getLotteries();
    lottery === "mega-sena" ? setMegaSenaContentVisible(true) : setMegaSenaContentVisible(false);
    lottery === "quina" ? setQuinaContentVisible(true) : setQuinaContentVisible(false);
    lottery === "lotofácil" ? setLotoFacilContentVisible(true) : setLotoFacilContentVisible(false);
    lottery === "lotomania" ? setLotoManiaContentVisible(true) : setLotoManiaContentVisible(false);
    lottery === "timemania" ? setTimeManiaContentVisible(true) : setTimeManiaContentVisible(false);
    lottery === "dia de sorte" ? setDiaDeSorteContentVisible(true) : setDiaDeSorteContentVisible(false);
  }, [lottery])

  return (
    <div>
      <Select
        value={lottery}
        onChange={handleSetLottery}
        variant="outlined"
        displayEmpty>
        <MenuItem value="">Selecione uma loteria</MenuItem>
        {mappedLotteries}
      </Select>
      {megaSenaContentVisible && <MegaSena />}
      {quinaContentVisible && <Quina />}
      {lotoFacilContentVisible && <LotoFacil />}
      {lotoManiaContentVisible && <LotoMania />}
      {timeManiaContentVisible && <TimeMania />}
      {diaDeSorteContentVisible && <DiaDeSorte />}

    </div >
  );
}

export default App;
