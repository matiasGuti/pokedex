import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import '../styles/MiApi.css'

const MiApi = ({ className, pokemon, setPokemon }) => {
  const [currentURL, setCurrentURL] = useState(
    'https://pokeapi.co/api/v2/pokemon/'
  );
  const [nextPageURL, setNextPageURL] = useState('');
  const [prevPageURL, setPrevPageURL] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //En caso de que se desmonte el componente mientras se hace el fetch
    const controller = new AbortController();

    const initialFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(currentURL);

        //Lanzar un error en caso de que no se haya podido conectar a la API
        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setNextPageURL(data.next);
        setPrevPageURL(data.previous);
        return data.results.map((poke) => poke.url);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('La llamada a la API ha sido abortada');
        } else {
          setLoading(false);
          console.log(err.message);
        }
      }
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

    return () => {
      controller.abort();
    };
  }, [currentURL, setPokemon]);

  const gotoNextPage = () => {
    setCurrentURL(nextPageURL);
  };

  const gotoPrevPage = () => {
    setCurrentURL(prevPageURL);
  };

  return (
    <section className={className}>
      <div className='content-container'>
        {!loading && <PokemonList pokemon={pokemon} />}
        <Pagination
          gotoNextPage={nextPageURL ? gotoNextPage : null}
          gotoPrevPage={prevPageURL ? gotoPrevPage : null}
        />
      </div>
    </section>
  );
};

export default MiApi;
