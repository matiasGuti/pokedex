import React, { useState } from 'react';
import '../styles/PokemonList.css';
import PokedexModal from './PokedexModal';

const PokemonList = ({ pokemon }) => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  console.log(pokemon);

  return (
    <div className='pokemon-box-container'>
      {pokemon &&
        pokemon.map((poke) => (
          <div key={poke.id} className='pokemon-box'>
            <p>
              #{poke.id}:{' '}
              {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
            </p>
            <img
              src={poke.front_sprite}
              alt='Foto del Pokemon'
              className='pokemon-box-img'
            />
            <button
              onClick={() => {
                setCurrentPokemon(poke);
                setShowModal((prev) => !prev);
              }}
              className='pokemon-box-button'
            >
              Ver detalles
            </button>
          </div>
        ))}
      <PokedexModal
        show={showModal}
        setShowModal={setShowModal}
        currentPokemon={currentPokemon}
      />
    </div>
  );
};

export default PokemonList;
