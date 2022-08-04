import React from 'react';
import PropTypes from 'prop-types';
import './BeerItem.css';

function BeerItem(props) {

  return (
    <li className="beerItemContainer">
      <div className="itemContainer">
        <div className="frame">
          <img src={props.img} alt={props.img} />
          <p className='beerName'>{props.name}</p>
          <p className="beerDescription">{props.description}</p>
          <p className="price">{props.price}</p>
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
};

export { BeerItem };