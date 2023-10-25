import React from 'react';

import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';

import './App.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
