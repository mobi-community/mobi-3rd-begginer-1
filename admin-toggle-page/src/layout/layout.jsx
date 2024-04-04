import SideMenu from "../components/common/sideMenu";
import Footer from "./footer";
import Header from "./header";

const { Outlet } = require("react-router-dom");

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <SideMenu />
            <Footer />
        </>
    );
};
export default RootLayout;
