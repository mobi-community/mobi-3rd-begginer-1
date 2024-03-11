import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import ClientPage from "../pages/client/client";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <ClientPage /> }],
  },
]);
