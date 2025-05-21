// src/routes/routes.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "../pages/productDetails/ProductDetailsPage";
import ProductListPage from "../pages/productList/ProductListPage";
import CartPage from "../pages/cart/CartPage";
import { Outlet } from 'react-router-dom';
import SearchAppBar from "../Layout/header/SearchAppBar";
import Footer from "../Layout/footer/Footer";


function Layout() {
  return (
    <div>
      <SearchAppBar />
      <Outlet /> 
      <Footer />
    </div>
  );
}

export default function RoutesProvider() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          path: "/",
          element: <ProductListPage />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetailsPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
