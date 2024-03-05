import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main";
import UserPagenation from "../page/user-page";

const router = createBrowserRouter([
    {
        path: "",
        element: <Main />,
    },
    {
        path: `/user/:pageNumber`,
        element: <UserPagenation />,
    },
]);
export default router;
