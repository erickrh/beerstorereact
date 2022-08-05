import React from 'react';
import PropTypes from 'prop-types';
import './BeerItem.css';

function BeerItem(props) {

  // Add points after every 3 digits to price.
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  return (
    <li className="beerItemContainer">
      <div className="itemContainer">
        <div className="frame">
          <img src={props.img} alt={props.img} />
          <p className='beerName'>{props.name}</p>
          <p className="beerDescription">{props.description}</p>
          <p className="price">{formatNumber(props.price)}</p>
          <div value={props.filterId}></div>
        </div>
      </div>
      <div className="agregarButton">
        <p>agregar</p>
      </div>
    </li>
  );
}

// Fix for 'React eslint error missing in props validation'
BeerItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.node.isRequired,
  filterId: PropTypes.number.isRequired,
};

export { BeerItem };