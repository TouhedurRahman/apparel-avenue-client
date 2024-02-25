import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ShopNow from "../../Pages/ShopNow/ShopNow/ShopNow";
import MensCollections from "../../Pages/ShopNow/MensCollections/MensCollections";
import WomensCollections from "../../Pages/ShopNow/WomensCollections/WomensCollections";
import KidsCollections from "../../Pages/ShopNow/ShopNow/KidsCollections/KidsCollections";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";
import Login from "../../Pages/LoginAndResgistration/Login/Login";

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
            },
            {
                path: 'mens-collections',
                element: <MensCollections />
            },
            {
                path: 'womens-collections',
                element: <WomensCollections />
            },
            {
                path: 'kids-collections',
                element: <KidsCollections />
            },
            {
                path: 'product/:id',
                element: <SingleProduct />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
]);

export default router;