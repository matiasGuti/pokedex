import React, { useEffect, useState } from 'react';
import '../styles/RegionButton.css';

const RegionButton = ({ region }) => {
  const [regionData, setRegionData] = useState([]);
  const [url, setURL] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );

  useEffect(() => {
    const controller = new AbortController();

    const fetchPerRegion = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();

        setRegionData(data.results);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        } else {
          console.log(err.message);
        }
      }
    };

    fetchPerRegion();

    return () => {
      controller.abort();
    };
  }, [url]);

  const filterPerRegion = () => {
    let regionArr = [];

    switch ({ region }.region) {
      case 'Kanto':
        regionArr = regionData.slice(0, 150);
        console.log(regionArr);
        break;
      case 'Johto':
        regionArr = regionData.slice(151, 251);
        console.log(regionArr);
        break;
      case 'Hoenn':
        regionArr = regionData.slice(251, 386);
        console.log(regionArr);
        break;
      case 'Sinnoh':
        regionArr = regionData.slice(386, 493);
        console.log(regionArr);
        break;
      case 'Unova':
        regionArr = regionData.slice(493, 649);
        console.log(regionArr);
        break;
      case 'Kalos':
        regionArr = regionData.slice(649, 721);
        console.log(regionArr);
        break;
      case 'Alola':
        regionArr = regionData.slice(721, 809);
        console.log(regionArr);
        break;
      case 'Galar':
        regionArr = regionData.slice(809, 905);
        console.log(regionArr);
        break;
    }
  };

  return (
    <>
      <button className='custom-btn' onClick={filterPerRegion}>
        <span>{region}</span>
      </button>
    </>
  );
};

export default RegionButton;
