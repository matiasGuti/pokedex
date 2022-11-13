import React from 'react'
import pokedexLogo from "../imgs/pokedex-logo.png";
import '../styles/Header.css'

const Header = () => {
  return ( 
    <header>
      <img src={pokedexLogo} alt="Logo de la pagina" />
      <div class="search-box">
        <button class="btn-search"><i class="fas fa-search"></i></button>
        <input type="text" class="input-search" placeholder="Type to Search..." />
      </div>
    </header>
   );
}
 
export default Header;

