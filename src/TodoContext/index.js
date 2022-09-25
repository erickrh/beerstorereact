import React from 'react';
import PropTypes from 'prop-types';
import { useFetchAPI } from './useFetchAPI';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    items,
    setItems,
    error,
    isLoaded,
    itemsConst,
  } = useFetchAPI('./products.json');

  // Beers options states.
  const [rubia, setRubia] = React.useState(false);
  const [morena, setMorena] = React.useState(false);
  const [roja, setRoja] = React.useState(false);

  // Modal state.
  const [openModal, setOpenModal] = React.useState(false);

  const ItemsHandler = () => {
    let filtersId = [];
    
    if (rubia) filtersId.push(1);
    if (morena) filtersId.push(2);
    if (roja) filtersId.push(3);

    let collector = {
      products: []
    };

    for (let item in itemsConst.products) {
      for (let i = 0; i <= filtersId.length; i++) {
        if (itemsConst.products[item].filterId == filtersId[i]) {
          collector.products.push(itemsConst.products[item]);
        }
      }
    }

    setItems(collector);
    return collector;
  };

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
      ItemsHandler,
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