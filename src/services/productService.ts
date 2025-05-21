import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export default async function fetchProducts(limit: number, skip: number) {
  const response = await axios.get(API_URL, {
    params: {
      limit,
      skip,
    },
  });
  return response.data;
}
