import { useQuery, keepPreviousData } from "@tanstack/react-query";
import  fetchProducts  from "../services/productService";

export default function useProducts(limit: number, skip: number) {
  return useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProducts(limit, skip),
    placeholderData: keepPreviousData,
  });
}