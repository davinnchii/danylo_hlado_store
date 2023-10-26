import React, { useState, useContext } from 'react';
import { TabletType } from '../types/TabletType';

interface TabletsContextType {
  tablets: TabletType[],
  setTablets: React.Dispatch<React.SetStateAction<TabletType[]>>
}

const TabletsContext = React.createContext({} as TabletsContextType);

type Props = {
  children: React.ReactNode,
};

export const TabletsContextProvider: React.FC<Props> = ({ children }) => {
  const [tablets, setTablets] = useState<TabletType[]>([]);

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
