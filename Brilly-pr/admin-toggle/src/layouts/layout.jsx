import Header from "./header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
export default RootLayout;
