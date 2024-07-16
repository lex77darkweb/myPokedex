
function PokemonCard({pokemon}) {
  // const pokemon = { name: "mew" };
    return (
      <figure className="pokemon-card">
        {
          pokemon.imgSrc != null
          ? <img src={pokemon.imgSrc} alt={pokemon.name} className="pokemon-image" />
          : <p className="no-image">???</p>
          
        } 
        
    
        <figcaption> {pokemon.name} </figcaption>

        
    </figure>
    )
    
  }
  
  export default PokemonCard; 
