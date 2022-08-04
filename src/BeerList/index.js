import React from 'react';
import PropTypes from 'prop-types';
import './BeerList.css';

function BeerList(props) {
  return (
    <section>
      <div className="flexContainer">
        <ul className="gridItemContainer">
          {props.children}
        </ul>
      </div>
    </section>
  );
}

// Fix for 'React eslint error missing in props validation'
BeerList.propTypes = {
  children: PropTypes.node.isRequired
};

export { BeerList };