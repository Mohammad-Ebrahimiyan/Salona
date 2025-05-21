export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  stock: number;
  rating:number;

  warrantyInformation: string;

  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
  quantity: number;
}


export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
