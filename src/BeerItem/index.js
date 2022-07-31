import React from 'react';
import './BeerItem.css';

function BeerItem() {
  return (
    <div className="flexContainer">
      <div className='gridItemContainer'>

        <li className="beerItemContainer">
          <div className="itemContainer"></div>
          <div className="agregarButton"></div>
        </li>

        <li className="beerItemContainer">
          <div className="itemContainer"></div>
          <div className="agregarButton"></div>
        </li>

      </div>
    </div>
  );
}

export { BeerItem };