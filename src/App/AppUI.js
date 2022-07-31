import React from 'react';
// import { TodoContext } from '../TodoContext';
import { Header } from '../Header';
import { Title } from '../Title';
import { BeerList } from '../BeerList';
import { BeerItem } from '../BeerItem';

function AppUI() {
  // const {

  // } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Header />

      <Title />

      <BeerList>
        <BeerItem />
      </BeerList>
    </React.Fragment>
  );
}

export { AppUI };