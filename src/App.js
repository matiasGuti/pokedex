import './App.css';
import React, { useState, useEffect } from 'react';
import MiApi from './components/MiApi';
import Header from './components/Header';
import ButtonSection from './components/ButtonSection';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [searchURL, setSearchURL] = useState('');

  //Cuando el usuario escriba algo en la searchbar se va a actualizar el state search que va a activar el siguiente useEffect que actualizara 
  //una URL para hacer fetch
  useEffect(() => {
    setSearchURL(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
  }, [search, searchURL])

  return (
    <main className='main-container'>
      <Header className='header-container' setSearch={setSearch} />
      <ButtonSection className='sidebar-container' />
      <MiApi
        className='pokemon-container'
        pokemon={pokemon}
        setPokemon={setPokemon}
        searchPokemon={searchURL}
      />
    </main>
  );
}

export default App;
