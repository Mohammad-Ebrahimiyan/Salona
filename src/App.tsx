import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesProvider from "./routes/routes";
import CartContextProvider from "./context/CartContextProvider";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
      <RoutesProvider />
      </CartContextProvider>
    </QueryClientProvider>
  );
}
