import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Home from './pages/Home';
import Travel from './pages/Travel';
import SingleLine from './pages/SingleLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Home path="/"/>
        <Travel path="/travel"/>
        <SingleLine path="/travel/:id"/>
      </Router>
    </div>
  );
}

export default App;
