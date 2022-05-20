import axios from 'axios';
import { useEffect, useState } from 'react';
import MegaSena from "../src/pages/MegaSena/MegaSena";
import Quina from "../src/pages/Quina/Quina";
import LotoFacil from "../src/pages/LotoFacil/LotoFacil";
import LotoMania from "../src/pages/LotoMania/LotoMania";
import TimeMania from "../src/pages/TimeMania/TimeMania";
import DiaDeSorte from "../src/pages/DiaDeSorte/DiaDeSorte";
import { BASE_URL } from './constants/urls';
import { DarkGreenSideBar, FuchsiaSideBar, GreenSideBar, LightBrownSideBar, OrangeSideBar, PurpleSideBar, SelectInput} from './styledGeneral/styled';
import "./App.css";


function App() {
  const [lottery, setLottery] = useState("mega-sena");
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
    return <option key={lottery.id} value={lottery.nome}>{lottery.nome.toUpperCase()}</option>
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
    <>
      {lottery === "mega-sena" && <GreenSideBar />}
      {lottery === "quina" && <PurpleSideBar />}
      {lottery === "lotofácil" && <FuchsiaSideBar />}
      {lottery === "lotomania" && <OrangeSideBar />}
      {lottery === "timemania" && <DarkGreenSideBar />}
      {lottery === "dia de sorte" && <LightBrownSideBar />}
      
      <SelectInput
        value={lottery}
        onChange={handleSetLottery}
      >
        {mappedLotteries}
      </SelectInput>
      {megaSenaContentVisible && <MegaSena />}
      {quinaContentVisible && <Quina />}
      {lotoFacilContentVisible && <LotoFacil />}
      {lotoManiaContentVisible && <LotoMania />}
      {timeManiaContentVisible && <TimeMania />}
      {diaDeSorteContentVisible && <DiaDeSorte />}
    </>
  );
}

export default App;
