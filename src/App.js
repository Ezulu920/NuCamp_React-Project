import React, { Component } from 'react';
import './App.css';
import MainNav from './Component/NavComponent';
import Carousel from "./Component/CarouselComponent";
import Card from './Component/CardComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Carousel />
        <Card />
      </div>
    );
  }
}

export default App;