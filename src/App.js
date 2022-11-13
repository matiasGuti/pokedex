import './App.css';
import React, { useState} from 'react';
import MiApi from './components/MiApi';
import Header from './components/Header';

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <main className='main-container'>
      <Header />
      <div className='pokemon-container'>
        <MiApi pokemon={pokemon} setPokemon={setPokemon}/>
      </div>
    </main>
  );
}

export default App;
