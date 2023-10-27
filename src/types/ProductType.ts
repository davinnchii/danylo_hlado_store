export interface ProductType {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  phoneId?: string;
}

export interface ProductResponseType {
  count: number;
  rows: ProductType[];
}
