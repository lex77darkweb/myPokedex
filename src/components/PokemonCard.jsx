import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <figure className="pokemon-card">
        {
          pokemon.imgSrc != null
          ? <img src={pokemon.imgSrc} alt={pokemon.name} className="pokemon-image" />
          : <p className="no-image">???</p>
        } 
    
        <figcaption> {pokemon.name} </figcaption>
        
    </figure>
    </div>
    );
    
  };

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };
  
  export default PokemonCard; 
