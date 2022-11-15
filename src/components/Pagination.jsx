import React from 'react';
import '../styles/Pagination.css'

const Pagination2 = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div className='pagination-container'>
    {gotoPrevPage && (
        <div className='wrapper'>
          <a onClick={gotoPrevPage} className='button-previous' href='!#'>
            <span>Anterior</span>
          </a>
        </div>
      )}

      {gotoNextPage && (
        <div className='wrapper'>
          <a onClick={gotoNextPage} className='button-next' href='!#'>
            <span>Siguiente</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Pagination2;
