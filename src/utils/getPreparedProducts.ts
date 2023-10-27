import { ProductType } from '../types/ProductType';

export const getPreparedProducts = (
  sortField: string,
  products: ProductType[],
) => {
  const copyProducts = [...products];

  if (sortField) {
    copyProducts.sort((a, b) => {
      switch (sortField) {
        case 'price':
          return (a.fullPrice - a.price) - (b.fullPrice - b.price);
        case 'year':
          return b.year - a.year;
        default:
          return 0;
      }
    });
  }

  return copyProducts.slice(0, 25);
};
