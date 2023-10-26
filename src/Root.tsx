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

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="phones">
            <Route index element={<h1>phones</h1>} />
            <Route path=":id?" element={<h1>phone number</h1>} />
          </Route>

          <Route path="tablets" element={<h1>tablets</h1>} />
          <Route path="accessories" element={<h1>accessories</h1>} />
          <Route path="favourites" element={<h1>favourites</h1>} />
          <Route path="cart" element={<h1>shopping-bag</h1>} />

          <Route path="home" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
