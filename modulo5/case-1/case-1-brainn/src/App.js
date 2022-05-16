import { MenuItem, Select } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [lottery, setLottery] = useState("")
  const [selectLottery, setSelectLottery] = useState("")

  const getLotteries = () => {
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
      .then((res) => {
        setSelectLottery(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleSetLottery = (event) => {
    setLottery(event.target.value);
  }

  const mappedLotteries = !selectLottery ? [] : selectLottery.map((lottery) => {
    return <MenuItem key={lottery.id} value={lottery.nome}>{lottery.nome}</MenuItem>
  })

  useEffect(() => {
    getLotteries()
  }, [])

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
    </div >
  );
}

export default App;
