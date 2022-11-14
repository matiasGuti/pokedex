import './App.css';
import React, { useState } from 'react';
import MiApi from './components/MiApi';
import Header from './components/Header';
import ButtonSection from './components/ButtonSection';

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <main className='main-container'>
      <Header className='header-container' />
      <ButtonSection className='sidebar-container' />
      <MiApi
        className='pokemon-container'
        pokemon={pokemon}
        setPokemon={setPokemon}
      />
    </main>
  );
}

export default App;
