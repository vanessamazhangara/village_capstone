import React, { Component } from 'react';
import { Route, } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './components/landing';
import GlobalStyles from './styles/Global';
import './App.css';

class App extends Component {

  render() { 
    return (
      <>
      <GlobalStyles />
      <Navbar />
      <Landing />
      </>
    );
  }
}
 
export default App;
