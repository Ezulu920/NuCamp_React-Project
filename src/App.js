import React, { Component } from 'react';
import './App.css';
import MainNav from './Component/NavComponent';
import Homebody from './Component/HomeComponent';
import PhoneMockup from './Component/PhoneMockup';
import Features from './Component/FeatureComponent';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <MainNav />
          <Homebody />
          <PhoneMockup />
          <Features />
        </div>
      </>
    );
  }
}

export default App;