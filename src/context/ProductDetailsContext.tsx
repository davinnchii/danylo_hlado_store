import React, { useState, useContext } from 'react';
import { ProductDetailsType } from '../types/ProductDetailsType';

interface ProductDetailsContextType {
  productDetails: ProductDetailsType[],
  setProductDetails: React.Dispatch<React.SetStateAction<ProductDetailsType[]>>
}

const ProductDetailsContext = React.createContext(
  {} as ProductDetailsContextType,
);

type Props = {
  children: React.ReactNode,
};

export const ProductDetailsContextProvider: React.FC<Props> = ({
  children,
}) => {
  const [
    productDetails,
    setProductDetails,
  ] = useState<ProductDetailsType[]>([]);

  const value = {
    productDetails,
    setProductDetails,
  };

  return (
    <ProductDetailsContext.Provider value={value}>
      {children}
    </ProductDetailsContext.Provider>
  );
};

export const useProductDetails = () => useContext(ProductDetailsContext);
