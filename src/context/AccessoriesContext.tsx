import React, { useState, useContext } from 'react';
import { ProductType } from '../types/ProductType';

interface AccessoriesContextType {
  accessories: ProductType[],
  setAccessories: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const AccessoriesContext = React.createContext({} as AccessoriesContextType);

type Props = {
  children: React.ReactNode,
};

export const AccessoriesContextProvider: React.FC<Props> = ({ children }) => {
  const [accessories, setAccessories] = useState<ProductType[]>([]);

  const value = {
    accessories,
    setAccessories,
  };

  return (
    <AccessoriesContext.Provider value={value}>
      {children}
    </AccessoriesContext.Provider>
  );
};

export const useAccessories = () => useContext(AccessoriesContext);
