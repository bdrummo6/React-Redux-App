import React from 'react';
import NEOs from './components/NEOs.js';
import './App.css';

import { Container, Badge } from 'reactstrap';

const App = () => {
  const AppStyles = {
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    textAlign: 'center'
  };

  return (
    <Container style={AppStyles}>
      <h1><Badge>NEOs</Badge></h1>
      <NEOs />
    </Container>
  )
};

export default App;
