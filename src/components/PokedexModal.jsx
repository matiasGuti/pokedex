import React from 'react';
import '../styles/PokedexModal.css';
import { RiCloseLine } from 'react-icons/ri';

const PokedexModal = ({ show, setShowModal, currentPokemon }) => {
  console.log(currentPokemon);

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
                <div className='pokemon-name-container'>
                  <p className='pokemon-number'>No. {currentPokemon.id}</p>
                  <p className='pokemon-name'>{currentPokemon.name}</p>
                </div>
                <div className='pokemon-info-container'>
                  <div className='type-container'>
                    <p className='info-title'>Type</p>
                    <p className='type-text'>
                      <div className={currentPokemon.type1}>
                        {currentPokemon.type1}
                      </div>
                      {currentPokemon.type2 && (
                        <div className={currentPokemon.type2}>
                          {currentPokemon.type2}
                        </div>
                      )}
                    </p>
                  </div>
                  <div className='height-container'>
                    <p className='info-title'>Height</p>
                    <p className='info-text'>{currentPokemon.height}</p>
                  </div>
                  <div className='weight-container'>
                    <p className='info-title'>Weight</p>
                    <p className='info-text'>{currentPokemon.height}</p>
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
