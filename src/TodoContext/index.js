import React from 'react';
import PropTypes from 'prop-types';

const TodoContext = React.createContext();

function TodoProvider(props) {

  // Context here.

  return (
    <TodoContext.Provider value={{
      // Elements here.
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