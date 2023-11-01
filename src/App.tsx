import React from 'react';
import { Outlet } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <SkeletonTheme baseColor="#F1EFEF" highlightColor="#7D7C7C">
      <Header />
      <Outlet />
      <Footer />
    </SkeletonTheme>
  );
};
