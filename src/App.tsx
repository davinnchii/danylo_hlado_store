import React from 'react';

import './App.scss';

import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Outlet />
      <Footer />
    </>
  );
};
