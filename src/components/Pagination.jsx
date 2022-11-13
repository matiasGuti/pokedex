import React from 'react';
import '../styles/Pagination.css'

const Pagination2 = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div className='pagination-container'>
      {/* {gotoPrevPage && (
        <button onClick={gotoPrevPage} className='button-previous'>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button onClick={gotoNextPage} className='button-next'>
          Next
        </button>
      )} */}

    {gotoPrevPage && (
        <div class='wrapper'>
          <a onClick={gotoNextPage} className='button-previous'>
            <span>Previous</span>
          </a>
        </div>
      )}

      {gotoNextPage && (
        <div class='wrapper'>
          <a onClick={gotoNextPage} className='button-next'>
            <span>Next</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Pagination2;
