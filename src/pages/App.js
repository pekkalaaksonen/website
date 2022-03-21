import React, { Component } from "react";
import Title from "./components/title/Title";
import Socialmedia from "./components/socialmedia/Socialmedia";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Socialmedia />
      </div>
    );
  }
}

export default App;
