import { ProductCartResponseType } from '../types';
import { ProductResponseType, ProductType } from '../types/ProductType';
import { client } from '../utils/fetchClient';

const BASE_PARAMETER = 'products';

export const getAllProducts = () => {
  return client.get<ProductCartResponseType>(`/${BASE_PARAMETER}`);
};

export const getProductById = (id: string) => {
  return client.get<ProductCartResponseType>(`/${BASE_PARAMETER}/${id}`);
};

export const getProductsWithNewModels = () => {
  return client.get<ProductType[]>(`/${BASE_PARAMETER}/new`);
};

export const getProductsWithDiscount = () => {
  return client.get<ProductType[]>(`/${BASE_PARAMETER}/discount`);
};

export const getRecommendedProducts = (id: string) => {
  return client.get<ProductType[]>(`/${BASE_PARAMETER}/${id}/recommended`);
};

export const getSpecificSorting = (
  category: string,
  sortField: string,
  limit: number,
  offset: number,
) => {
  return client.get<ProductResponseType>(
    `/${BASE_PARAMETER}?category=${category}&limit=${limit}&offset=${offset}&sortBy=${sortField}`,
  );
};
