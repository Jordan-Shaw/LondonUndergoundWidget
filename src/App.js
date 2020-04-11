import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Home from './components/Home';
import Travel from './components/Travel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Home path="/"/>
        <Travel path="/travel"/>
      </Router>
    </div>
  );
}

export default App;
