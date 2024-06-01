import React from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Timer and Stopwatch</h1>
      <div className="components-container">
        <Stopwatch />
        <Timer />
      </div>
    </div>
  );
}

export default App;
