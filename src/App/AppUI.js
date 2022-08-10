import React from 'react';
import { TodoContext } from '../TodoContext';
import { Header } from '../Header';
import { Title } from '../Title';
import { BeerList } from '../BeerList';
import { BeerItem } from '../BeerItem';
import { MoreProducts } from '../MoreProducts';
import { Footer } from '../Footer';
import { FilterFixed } from '../FilterFixed';
import { Modal } from '../Modal';
import { FilterForm } from '../FilterForm';

function AppUI() {
  const {
    items,
    // eslint-disable-next-line no-unused-vars
    error,
    isLoaded,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>

      <Header />

      <Title />

      <BeerList>
        {isLoaded &&
        items.products.map((item) => (
          <BeerItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            img={item.img}
            filterId={item.filterId}
          />
        ))
        }
      </BeerList>

      <MoreProducts />

      <Footer />

      <FilterFixed />

      <Modal>
        <FilterForm />
      </Modal>

    </React.Fragment>
  );
}

export { AppUI };