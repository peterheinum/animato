import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as dotenv from 'dotenv';
dotenv.config()

const mapquest_key = process.env.MAPQUEST_KEY;
const mapquest_secret = process.env.MAPQUEST_SECRET;
const darksky_key = process.env.DARKSKY_KEY;


class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
  

  render() {
    return (
      <div className="App">
        <input placeholder="city" onChange={(e) => {this.setState({ city: e.target.value })}}></input>
        {this.state.city}
      </div>
    );
  }
}

export default App;
