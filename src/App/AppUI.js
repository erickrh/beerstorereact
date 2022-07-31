import React from 'react';
// import { TodoContext } from '../TodoContext';
import { Header } from '../Header';
import { Title } from '../Title';

function AppUI() {
  // const {

  // } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Header />

      <Title />
    </React.Fragment>
  );
}

export { AppUI };