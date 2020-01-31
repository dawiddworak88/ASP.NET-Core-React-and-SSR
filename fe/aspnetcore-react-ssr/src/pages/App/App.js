import React from 'react';
import logo from './logo.svg';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.welcome}
        </p>
        <p>
          {props.learnMore}
        </p>
      </header>
    </div>
  );
}

export default App;
