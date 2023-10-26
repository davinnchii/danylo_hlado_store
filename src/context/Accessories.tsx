import React, { useState, useContext } from 'react';
import { AccessoryType } from '../types/AccessoryType';

interface AccessoriesContextType {
  accessories: AccessoryType[],
  setAccessories: React.Dispatch<React.SetStateAction<AccessoryType[]>>
}

const AccessoriesContext = React.createContext({} as AccessoriesContextType);

type Props = {
  children: React.ReactNode,
};

export const AccessoriesContextProvider: React.FC<Props> = ({ children }) => {
  const [accessories, setAccessories] = useState<AccessoryType[]>([]);

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
