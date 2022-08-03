import React from 'react';
import PropTypes from 'prop-types';
import './BeerItem.css';
import cassels from '../img/cassels.png';

function BeerItem(props) {

  return (
    <div className="flexContainer">
      <div className='gridItemContainer'>

        <li className="beerItemContainer">
          <div className="itemContainer">
            <div className="frame">
              <img src={cassels} alt="cassels" />
              <p className='beerTitle'>{`${props.name}`}</p>
              <p className="beerDescription">Cassels & Sons Brewing. Cerveza porter y stout</p>
              <p className="price">$75.000</p>
            </div>
          </div>
          <div className="agregarButton">
            <p>agregar</p>
          </div>
        </li>

        <li className="beerItemContainer">
          <div className="itemContainer"></div>
          <div className="agregarButton"></div>
        </li>

      </div>
    </div>
  );
}

// Fix for 'React eslint error missing in props validation'
BeerItem.propTypes = {
  name: PropTypes.node.isRequired
};

export { BeerItem };