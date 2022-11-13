import React from 'react';

const PokemonList = ({ pokemon }) => {
  return (
    <ul>
      {pokemon && pokemon.map((poke) => (
        <li key={poke.id}>
          {poke.name}
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
