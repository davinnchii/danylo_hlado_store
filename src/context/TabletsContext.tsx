import React, { useState, useContext } from 'react';
import { ProductType } from '../types/ProductType';

interface TabletsContextType {
  tablets: ProductType[],
  setTablets: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const TabletsContext = React.createContext({} as TabletsContextType);

type Props = {
  children: React.ReactNode,
};

export const TabletsContextProvider: React.FC<Props> = ({ children }) => {
  const [tablets, setTablets] = useState<ProductType[]>([]);

  const value = {
    tablets,
    setTablets,
  };

  return (
    <TabletsContext.Provider value={value}>
      {children}
    </TabletsContext.Provider>
  );
};

export const useTablets = () => useContext(TabletsContext);
