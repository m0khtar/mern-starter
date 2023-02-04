import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import NotFound from "../pages/errors/NotFound";
import ServerError from "../pages/errors/ServerError";
import HomePage from "../pages/home/HomePage";
import ProductsPage from "../pages/products/ProductsPage";
import UsersPage from "../pages/users/UsersPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "users", element: <UsersPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
