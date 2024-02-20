import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ShopNow from "../../Pages/ShopNow/ShopNow/ShopNow";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'shop-now',
                element: <ShopNow />
            }
        ]
    },
]);

export default router;