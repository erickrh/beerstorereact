import React from 'react';
import PropTypes from 'prop-types';
import { useFetchAPI } from './useFetchAPI';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    items,
    error,
    isLoaded,
  } = useFetchAPI('./products.json');

  // Beers options states.
  const [rubia, setRubia] = React.useState(false);
  const [morena, setMorena] = React.useState(false);
  const [roja, setRoja] = React.useState(false);

  // Modal state.
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <TodoContext.Provider value={{
      items,
      error,
      isLoaded,
      rubia,
      setRubia,
      morena,
      setMorena,
      roja,
      setRoja,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

// Fix for 'React eslint error missing in props validation'
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { TodoContext, TodoProvider };