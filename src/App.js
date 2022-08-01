import { useState } from "react";
import SelectPokedex from "./SelectPokedex";
import SelectPokemon from "./SelectPokemon";
import PokemonDetail from "./PokemonDetail";
import './App.css';
export default function App() {
  const [pokedexName, setPokedexName] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);

  function goHome() {
    setPokemonName(null);
    setPokedexName(null);
  }
  if (pokedexName === null) {
    return <SelectPokedex onSelection={(name) => setPokedexName(name)} />
  }

   if (pokemonName === null) {
     return <SelectPokemon onSelection={(name) => setPokemonName(name)}  pokedex={pokedexName} />
   }

  return (
    <PokemonDetail pokemonName = {pokemonName} goHome = {goHome} goBack ={()=>{
      setPokemonName(null);
    }} />
  )
}
