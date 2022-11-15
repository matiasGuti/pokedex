import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import '../styles/MiApi.css';

const MiApi = ({ className, pokemon, setPokemon, searchPokemon }) => {
  const [currentURL, setCurrentURL] = useState(
    'https://pokeapi.co/api/v2/pokemon/'
  );
  const [nextPageURL, setNextPageURL] = useState('');
  const [prevPageURL, setPrevPageURL] = useState('');
  const [loading, setLoading] = useState(true);
  const [onlyPokemon, setOnlyPokemon] = useState(null);

  //Fetch que se dispara cuando el usuario busca un pokemon en especifico por el buscador
  useEffect(() => {
    const controller = new AbortController();

    const getSearchPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch(searchPokemon);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();

        const currentPokemon = [
          {
            id: data.id,
            name: data.name,
            type1: data.types[0].type.name,
            type2: data.types.length === 2 ? data.types[1].type.name : null,
            height: data.height,
            weight: data.weight,
            ability1: data.abilities[0].ability.name,
            ability2:
              data.abilities.length >= 2
                ? data.abilities[1].ability.name
                : null,
            ability3:
              data.abilities.length === 3
                ? data.abilities[2].ability.name
                : null,
            front_sprite: data.sprites.front_default,
          },
        ];

        setPokemon(currentPokemon);
        setOnlyPokemon('only-pokemon');
        setTimeout(() => setLoading(false), 1000);
      } catch (err) {
        if (err.name === 'Error') {
          alert('Pokemon no encontrado, porfavor ingrese otro nombre');
          setLoading(false);
        }
      }
    };

    getSearchPokemon();

    return () => {
      controller.abort();
    };
  }, [searchPokemon, setPokemon, onlyPokemon]);

  //Fetch inicial que trae todo los pokemones
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
          type1: fullData.types[0].type.name,
          type2:
            fullData.types.length === 2 ? fullData.types[1].type.name : null,
          height: fullData.height,
          weight: fullData.weight,
          ability1: fullData.abilities[0].ability.name,
          ability2:
            fullData.abilities.length >= 2
              ? fullData.abilities[1].ability.name
              : null,
          ability3:
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

    setTimeout(() => setLoading(false), 2000);

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
        <div className='pokemon-list-container'>
          {!loading && (
            <PokemonList pokemon={pokemon} onlyPokemonClass={onlyPokemon} />
          )}
          {loading && <p className='cargando'>Cargando datos...</p>}
        </div>
        <div className='pagination-container'>
          {!onlyPokemon && (
            <Pagination
              gotoNextPage={nextPageURL ? gotoNextPage : null}
              gotoPrevPage={prevPageURL ? gotoPrevPage : null}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MiApi;
