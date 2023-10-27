import React, { useState, useContext } from 'react';
import { ProductType } from '../Types/ProductType';

interface CartContextType {
  cart: ProductType[],
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const CartContext = React.createContext({} as CartContextType);

type Props = {
  children: React.ReactNode,
};

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

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
