import { createContext } from "react";
import { Product } from "../types/Product";

export interface CartContextType {
  cart: { product: Product; quantity: number }[]; 
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
