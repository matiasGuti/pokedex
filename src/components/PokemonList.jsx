import React from 'react';
import '../styles/PokemonList.css'

const PokemonList = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className='pokemon-box-container'>
      {pokemon && pokemon.map((poke) => (
        <div key={poke.id} className='pokemon-box'>
          <p>#{poke.id}: {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p>          
          <img src={poke.front_sprite} alt="Foto del Pokemon" className='pokemon-box-img' />
          <button className='pokemon-box-button' role='button'>Ver detalles</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
