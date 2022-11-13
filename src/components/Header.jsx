import React from 'react';
import pokedexLogo from '../imgs/pokedex-logo.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <img src={pokedexLogo} alt='Logo de la pagina' />
      <div className='search-box'>
        <button className='btn-search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
        <input
          type='text'
          className='input-search'
          placeholder='   Buscar un pokemon...'
        />
      </div>
    </header>
  );
};

export default Header;
