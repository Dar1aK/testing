import React from 'react';

import Dogs from './components/Dogs'
import Form from './components/Form'
import Header from './components/Header'
import Wrapper from './components/Wrapper'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Wrapper><Form /></Wrapper>
      
      <Dogs />
    </div>
  );
}

export default App;
