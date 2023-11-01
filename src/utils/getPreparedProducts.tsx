import { ProductType } from '../Types/ProductType';

export const getPreparedProducts = (products: ProductType[]) => {
  return products.slice(0, 18);
};
