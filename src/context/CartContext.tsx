import React, { useState, useContext, useEffect } from 'react';
import { CartProduct } from '../types';

interface CartContextType {
  cart: CartProduct[],
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>
}

export const CartContext = React.createContext({} as CartContextType);

type Props = {
  children: React.ReactNode,
};

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    let stored: string | null;

    try {
      stored = localStorage.getItem('cart');
    } catch {
      return [];
    }

    if (!stored || !Array.isArray(JSON.parse(stored))) {
      return [];
    }

    return JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const value = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
