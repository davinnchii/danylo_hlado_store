import { ProductType } from '../types/ProductType';

export const getPreparedProducts = (products: ProductType[]) => {
  return products.slice(0, 18);
};
