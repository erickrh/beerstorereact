import React from 'react';

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

export { TodoContext, TodoProvider };