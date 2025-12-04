import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Blog from "./pages/Blog.jsx";
import CartPage from "./pages/CartPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Contact from "./pages/Contact.jsx";


// defining routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      {path: "shop",element: <Shop />,},
      { path: "shop/:productId", element: <ProductDetail /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <Checkout /> },
      { path: "blog", element: <Blog /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
