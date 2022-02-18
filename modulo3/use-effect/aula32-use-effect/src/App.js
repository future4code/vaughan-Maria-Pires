import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

export default function App() {
  const [pokeList, setPokeList] = useState("");
  const [pokeName, setPokeName] = useState("");

  const pegarIdLista = (event) => {
    setPokeList(event.target.value);
  };
  const pegarPersonagens = (id) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    pegarPersonagens(pokeList);
  }, [pokeList]);


  const changePokeName = event => {
    this.setState({ pokeName: event.target.value });
  };
  return (
    <div className="App">
      <select onChange={setPokeList}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
    </div>
  );
}

