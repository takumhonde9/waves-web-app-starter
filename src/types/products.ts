import { GenericItem } from './common';

export interface IProduct extends GenericItem {
  thumbnail: string;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
}
