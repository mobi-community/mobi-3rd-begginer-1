import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main";

import UserPage from "../page/user-page";

const router = createBrowserRouter([
    {
        path: "",
        element: <Main />,
    },
    {
        path: `/user/`,
        element: <UserPage />,
    },
]);
export default router;
