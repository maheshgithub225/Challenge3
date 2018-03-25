import React, { Component } from 'react';
import Header from './components/Header/Header';
import AboveMain from './components/AboveMain/AboveMain';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header />
        <AboveMain />
        <MainContent />
        <Footer />
      </div>
      
    );
  }
}

export default App;
