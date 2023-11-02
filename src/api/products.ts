import {
  ProductResponseType,
  ProductType,
  ProductCartResponseType,
} from '../types';
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
  limit?: number,
  offset?: number,
  query?: string,
) => {
  const queryParams = [];

  if (category) {
    queryParams.push(`category=${category}`);
  }

  if (limit) {
    queryParams.push(`limit=${limit}`);
  }

  if (offset) {
    queryParams.push(`offset=${offset}`);
  }

  if (sortField) {
    queryParams.push(`sortBy=${sortField}`);
  }

  if (query) {
    queryParams.push(`query=${query}`);
  }

  return client.get<ProductResponseType>(
    `/${BASE_PARAMETER}${queryParams.length ? `?${queryParams.join('&')}` : ''}`,
  );
};
