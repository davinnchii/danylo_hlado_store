import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/header/Header';

import { Footer } from './components/footer/Footer';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
