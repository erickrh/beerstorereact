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

  return (
    <TodoContext.Provider value={{
      items,
      error,
      isLoaded,
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