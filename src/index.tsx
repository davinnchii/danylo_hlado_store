import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Root } from './Root';
import { ProductsContextProvider } from './context/ProductsContext';
import { CartContextProvider } from './context/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <CartContextProvider>
      <ProductsContextProvider>
        <Root />
      </ProductsContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
);
