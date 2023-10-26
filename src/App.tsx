import React from 'react';

import { Header } from './components/header/Header';

import { Footer } from './components/footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { Basket } from './components/Basket/Basket';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Basket />
      <Footer />
    </div>
  );
}

export default App;
