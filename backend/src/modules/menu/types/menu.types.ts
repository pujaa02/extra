export interface MenuAttributes {
  id?: number;
  restaurant_id?: number;
  item_name: string;
  image?: string;
  description?: string;
  price?: number;
  count?: number;
  createdAt?: Date;
  updatedAt?: Date;
}