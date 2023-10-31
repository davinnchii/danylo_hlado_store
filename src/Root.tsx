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

          <Route path="favourites" element={<h1>favourites</h1>} />
          <Route path="cart" element={<h1>shopping-bag</h1>} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
