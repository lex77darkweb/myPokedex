import PropTypes from "prop-types";

const NavBar = ({ pokemonList, setPokemonIndex }) => {
  const handlePokemonClick = (index, name) => {
    if (name === "Pikachu") {
      alert("pika pikachu !!!");
    }
    setPokemonIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
         <button key={index} onClick={() => handlePokemonClick(index, pokemon.name)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;