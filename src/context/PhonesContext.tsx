import React, { useState, useContext } from 'react';
import { PhoneType } from '../types/PhoneType';

interface PhonesContextType {
  phones: PhoneType[],
  setPhones: React.Dispatch<React.SetStateAction<PhoneType[]>>
}

const PhonesContext = React.createContext({} as PhonesContextType);

type Props = {
  children: React.ReactNode,
};

export const PhonesContextProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<PhoneType[]>([]);

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
