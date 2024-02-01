import { DiscountOffers } from './DiscountOffers';
export interface IProduct {
  id: number;
  description: string;
  name: string;
  quantity: number;
  price: number;
  img: string;
  categoryId: number;
  material: string;
  discount: DiscountOffers;
}
