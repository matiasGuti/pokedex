import React from 'react';

const Pagination2 = ({gotoNextPage,gotoPrevPage}) => {
  return ( 
  <div className='pagination-container'>
   {gotoPrevPage && <button onClick={gotoPrevPage} className='button-previous'>Previous</button>}
   {gotoNextPage && <button onClick={gotoNextPage} className='button-next'>Next</button>}
  </div> 
  );
}
 
export default Pagination2;