import React from 'react';

import { Header } from './components/header/Header';
// import { ProductCard } from './components/productCard/productCard';
import { Footer } from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ProductCard /> */}
      <Footer />
    </div>
  );
}

export default App;
