import { ProductResponseType } from '../types/ProductType';
import { client } from '../utils/fetchClient';

export const getAllProducts = () => {
  return client.get<ProductResponseType>('/products');
};
