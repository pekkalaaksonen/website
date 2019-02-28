import React, { Component } from "react";
import "./App.css";
import Title from "./components/title/title";
import Socialmedia from "./components/socialmedia/socialmedia";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Socialmedia />
      </div>
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    );
  }
}

export default App;
