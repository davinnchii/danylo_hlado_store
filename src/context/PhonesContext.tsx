import React, { useState, useContext } from 'react';
import { ProductType } from '../types/ProductType';

interface PhonesContextType {
  phones: ProductType[],
  setPhones: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const PhonesContext = React.createContext({} as PhonesContextType);

type Props = {
  children: React.ReactNode,
};

export const PhonesContextProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<ProductType[]>([]);

  const value = {
    phones,
    setPhones,
  };

  return (
    <PhonesContext.Provider value={value}>
      {children}
    </PhonesContext.Provider>
  );
};

export const usePhones = () => useContext(PhonesContext);
