import React from 'react';

function useFetchAPI(data) {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [itemsConst, setItemsConst] = React.useState([]);

  React.useEffect(() => {
    fetch(data)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setItemsConst(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return {
    items,
    setItems,
    error,
    isLoaded,
    itemsConst,
    setItemsConst,
  };
}

export { useFetchAPI };