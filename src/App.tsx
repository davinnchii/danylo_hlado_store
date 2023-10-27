import React from 'react';

import './App.scss';

import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
