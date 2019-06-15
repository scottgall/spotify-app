import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'boi';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello, {name}</h1>
      </header>
      <p className="App-intro">

      </p>
    </div>
  );
}

export default App;
