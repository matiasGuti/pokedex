import React from 'react';
import '../styles/RegionButton.css'

const RegionButton = ({ region }) => {
  return (
    <>
      <button className='custom-btn'>
        <span>{region}</span>
      </button>
    </>
  );
};

export default RegionButton;
