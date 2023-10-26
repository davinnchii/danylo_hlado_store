import React from 'react';

import './App.scss';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductCard } from './components/productCard/productCard';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
