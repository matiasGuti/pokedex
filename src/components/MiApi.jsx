import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination2 from './Pagination';

const MiApi = ({ className, pokemon, setPokemon }) => {
  const [currentURL, setCurrentURL] = useState(
    'https://pokeapi.co/api/v2/pokemon/'
  );
  const [nextPageURL, setNextPageURL] = useState('');
  const [prevPageURL, setPrevPageURL] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      const res = await fetch(currentURL);
      const data = await res.json();
      setNextPageURL(data.next);
      setPrevPageURL(data.previous);
      return data.results.map((poke) => poke.url);
    };

    const getAllCurrentPokemonData = async () => {
      const data = await initialFetch();

      let pokemonData = [];

      data.map(async (pokeURL) => {
        const res = await fetch(pokeURL);
        const fullData = await res.json();

        const currentPokemon = {
          id: fullData.id,
          name: fullData.name,
          Type1: fullData.types[0].type.name,
          Type2:
            fullData.types.length === 2 ? fullData.types[1].type.name : null,
          Height: fullData.height,
          Weight: fullData.weight,
          Abilitiy1: fullData.abilities[0].ability.name,
          Abilitiy2:
            fullData.abilities.length >= 2
              ? fullData.abilities[1].ability.name
              : null,
          Abilitiy3:
            fullData.abilities.length === 3
              ? fullData.abilities[2].ability.name
              : null,
          front_sprite: fullData.sprites.front_default,
        };

        pokemonData.push(currentPokemon);
        pokemonData.sort((a, b) => a.id - b.id);
        setPokemon(pokemonData);
      });
    };

    getAllCurrentPokemonData();

    setTimeout(() => setLoading(false), 1000);
  }, [currentURL, setPokemon]);

  const gotoNextPage = () => {
    setCurrentURL(nextPageURL);
  };

  const gotoPrevPage = () => {
    setCurrentURL(prevPageURL);
  };

  return (
    <section className={className}>
      {!loading && <PokemonList pokemon={pokemon} />}
      <Pagination2
        gotoNextPage={nextPageURL ? gotoNextPage : null}
        gotoPrevPage={prevPageURL ? gotoPrevPage : null}
      />
    </section>
  );
};

export default MiApi;
