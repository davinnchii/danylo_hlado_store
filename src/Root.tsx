import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { App } from './App';

import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { ItemCard } from './components/ItemCard';
import { Cart } from './components/Cart/Cart';
import { Favourites } from './components/Favourites/Favourites';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="products">
            <Route index element={<PhonesPage />} />
            <Route path=":id?" element={<ItemCard />} />
          </Route>

          <Route path="cart" element={<Cart />} />
          <Route path="favourites" element={<Favourites />} />

          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
