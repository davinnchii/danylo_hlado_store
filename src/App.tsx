import React from 'react';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ItemCard } from './components/ItemCard';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemCard />
      <Footer />
    </div>
  );
}

export default App;
