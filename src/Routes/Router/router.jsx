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
import Register from "../../Pages/LoginAndResgistration/Register/Register";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import MyCart from "../../Pages/Cart/MyCart/MyCart";
import BuyNow from "../../Pages/BuyNow/BuyNow/BuyNow";
import DashboardHome from "../../Pages/Dashboard/DashboardHome/DashboardHome";

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
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'my-profile',
                element: <MyProfile />
            },
            {
                path: 'my-cart',
                element: <MyCart />
            },
            {
                path: 'buy-now',
                element: <BuyNow />
            },
            {
                path: '/dashboard',
                element: <DashboardHome />
            }
        ]
    }
]);

export default router;