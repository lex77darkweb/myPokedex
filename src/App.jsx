import PokemonCard from "./components/PokemonCard";
import "./App.css"
import { useState } from "react";

const pokemonList = [
  {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const previousClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const nextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        {pokemonIndex > 0 && <button onClick={previousClick}>Précédent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button onClick={nextClick}>Suivant</button>}
      </div>
    </div>

  )
}

export default App