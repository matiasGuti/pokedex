import React from 'react';
import '../styles/PokedexModal.css';
import { RiCloseLine } from 'react-icons/ri';

const PokedexModal = ({ show, setShowModal, currentPokemon }) => {
  return (
    <>
      {show && (
        <div className='dark-background'>
          <div className='modal-container'>
            <div className='modal'>
              <button className='close-btn' onClick={() => setShowModal(false)}>
                <RiCloseLine style={{ marginBottom: '-3px' }} />
              </button>
              <div className='modal-content'>
                <div className='pokemon-sprite-container'>
                  <img
                    src={currentPokemon.front_sprite}
                    alt={currentPokemon.name}
                  />
                </div>
                <div className='data-container'>
                  <div className='pokemon-name-container'>
                    <div className='pokemon-number'>
                      <p>No.</p>
                      <p>{currentPokemon.id}</p>
                    </div>
                    <p className='pokemon-name'>
                      {currentPokemon.name.charAt(0).toUpperCase() +
                        currentPokemon.name.slice(1)}
                    </p>
                  </div>
                  <div className='pokemon-info-container'>
                    <div className='type-container'>
                      <p className='info-title'>Type</p>
                      <div className='type-text'>
                        <div className={currentPokemon.type1}>
                          {currentPokemon.type1.charAt(0).toUpperCase() +
                            currentPokemon.type1.slice(1)}
                        </div>
                        {currentPokemon.type2 && (
                          <div className={currentPokemon.type2}>
                            {currentPokemon.type2.charAt(0).toUpperCase() +
                            currentPokemon.type2.slice(1)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='height-container'>
                      <p className='info-title'>Height</p>
                      <p className='info-text'>{currentPokemon.height}</p>
                    </div>
                    <div className='weight-container'>
                      <p className='info-title'>Weight</p>
                      <p className='info-text'>{currentPokemon.height}</p>
                    </div>
                    <div className='ability-container'>
                      <p className='info-title'>Abilities</p>
                      <div className='ability-text-container'>
                        <p className='info-ability'>
                          {currentPokemon.ability1.charAt(0).toUpperCase() +
                            currentPokemon.ability1.slice(1)}
                        </p>
                        <p>/</p>
                        {currentPokemon.ability2 && (
                          <p className='info-ability'>
                            {currentPokemon.ability2.charAt(0).toUpperCase() +
                              currentPokemon.ability2.slice(1)}
                          </p>            
                        )}
                        {currentPokemon.ability3 && <p>/</p>}
                        {currentPokemon.ability3 && (
                          <p className='info-ability'>
                            {currentPokemon.ability3.charAt(0).toUpperCase() +
                              currentPokemon.ability3.slice(1)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokedexModal;
