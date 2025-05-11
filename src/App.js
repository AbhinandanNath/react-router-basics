import HomePage from "./components/HomePage";
import {
  // Route,
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
} from "react-router-dom";
import Prodcuts from "./components/Prodcuts";
import RootLayout from "./RootLayout";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/ProductDetails";

function App() {
  // const routeDefinitions = createRoutesFromElements(
  //   <Route>
  //      <Route path="/" element={<HomePage />} />
  //      <Route path="/products" element={<Prodcuts />} />
  //   </Route>
  // );

  const routerPaths = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        // { path: "", element: <HomePage /> },
        { index: true, element: <HomePage /> },
        { path: "/products", element: <Prodcuts /> },
        { path: "/products/:productId", element: <ProductDetails /> },
      ],
    },
  ]);

  // const routerPaths = createBrowserRouter(routeDefinitions);
  return <RouterProvider router={routerPaths} />;
}

export default App;
