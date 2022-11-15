import React, { useState } from 'react';
import pokedexLogo from '../imgs/pokedex-logo.png';
import '../styles/Header.css';

const Header = ({ className, setSearch }) => {
  const [input, setInput] = useState('')

  const handlePress = (ev) => {
    if(ev.key === 'Enter') {
      setSearch(input)
      setInput('')
    } 
  };

  return (
    <header className={className}>
      <img src={pokedexLogo} alt='Logo de la pagina' />
      <div className='search-box'>
        <button className='btn-search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
        <input
          type='text'
          className='input-search'
          placeholder='   Buscar un pokemon...'
          onChange={(ev) => setInput(ev.target.value)}
          onKeyPress={handlePress}
          value={input}
        />
      </div>
    </header>
  );
};

export default Header;
