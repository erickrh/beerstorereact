import React from 'react';
import PropTypes from 'prop-types';

function BeerList(props) {
  return (
    <section>
      <ul className="beerListContainer">
        {props.children}
      </ul>
    </section>
  );
}

// Fix for 'React eslint error missing in props validation'
BeerList.propTypes = {
  children: PropTypes.node.isRequired
};

export { BeerList };