// src/context/CartContextProvider.tsx
import { useState, ReactNode } from "react";
import { Product } from "../types/Product";
import { CartContext } from "./CartContext";

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.product.id === product.id);
      if (existingProduct) {
        // اگر محصول قبلاً وجود داشت، فقط تعداد را افزایش می‌دهیم
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];  // اضافه کردن محصول با مقدار 1
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(item.product.stock, quantity)) } // اطمینان از اینکه تعداد بیش از stock نخواهد شد
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
