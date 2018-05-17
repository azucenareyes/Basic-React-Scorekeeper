import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-mainbox">
      <h1 className="App-h1">Scoreboard</h1>
        <div className="players">
          <div className="first">Azucena
            <div className="counter">
            <div className="minus">minus
            </div>
            <button type="button" class="btn"> my button</button>
            <div className="plus">plus</div>
            </div>
        </div>
          <div className="second">Sofia
            <div className="counter">
            <div className="minus">minus
            </div>
            <button type="button" class="btn"> my button</button>
            <div className="plus">plus</div>
            </div>
          </div>
    </div>
        </div>
      </div>
    );
  }
}

export default App;
