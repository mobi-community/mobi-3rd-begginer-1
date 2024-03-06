import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/layout";
import UserList from "../../pages/user-list";
import UserRegister from "../../pages/user-register";
import ProductList from "../../pages/product-list";
import ProductRegister from "../../pages/product-register";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <UserList />,
			},
			{
				path: "/userRegister",
				element: <UserRegister />,
			},
			{
				path: "/productList",
				element: <ProductList />,
			},
			{
				path: "productRegister",
				element: <ProductRegister />,
			},
		],
	},
]);
export default Router;
