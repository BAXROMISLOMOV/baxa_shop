import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type ProductType = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
};


export type CategoriesPage = {
    items: [
      {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        categoryId: number;
        createdAt: string;
        imageUrl: string;
      }
    ];
    page: number;
    limit: number;
    totalItems: number;
  };