import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Coffee from './components/Coffee';
import Dogs from './components/Dogs';
import Form from './components/Form';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div id="route-container">
          <Route path="/" exact component={Form} />
          <Route path="/dogs" exact component={Dogs} />
          <Route path="/coffee" exact component={Coffee} />
        </div>
        Это тест
      </Router>
    </div>
  );
}

export default App;
