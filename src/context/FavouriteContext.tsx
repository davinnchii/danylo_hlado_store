import React, { useState, useContext } from 'react';
import { ProductType } from '../types/ProductType';

interface FavouriteContextType {
  favourite: ProductType[],
  setFavourite: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const FavouriteContext = React.createContext({} as FavouriteContextType);

type Props = {
  children: React.ReactNode,
};

export const FavouriteContextProvider: React.FC<Props> = ({ children }) => {
  const [favourite, setFavourite] = useState<ProductType[]>([]);

  const value = {
    favourite,
    setFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => useContext(FavouriteContext);
