import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ pokemonIndex, pokemonListLength, onPreviousClick, onNextClick }) => {
  return (
    <div>
      {pokemonIndex > 0 && <button onClick={onPreviousClick}>Précédent</button>}
      {pokemonIndex < pokemonListLength - 1 && <button onClick={onNextClick}>Suivant</button>}
    </div>
  );
};

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default NavBar;