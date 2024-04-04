import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/layout";
import MainPage from "../pages/mainPage";
import UserPage from "../pages/userPage";
import AddUserPage from "../pages/addUserPage";
import ProductListPage from "../pages/productListPage";
import AddProductPage from "../pages/addProductPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
            {
                path: "/userList",
                element: <UserPage />,
            },
            {
                path: "/addUser",
                element: <AddUserPage />,
            },
            {
                path: "/productList",
                element: <ProductListPage />,
            },
            {
                path: "/addProduct",
                element: <AddProductPage />,
            },
        ],
    },
]);
export default router;
