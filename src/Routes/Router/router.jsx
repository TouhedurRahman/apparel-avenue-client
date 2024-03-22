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
import Orders from "../../Pages/Dashboard/AdminPanel/Orders/Orders/Orders";
import AllOrders from "../../Pages/Dashboard/AdminPanel/Orders/AllOrders/AllOrders";
import PendingOrders from "../../Pages/Dashboard/AdminPanel/Orders/PendingOrders/PendingOrders";
import DeliveredOrders from "../../Pages/Dashboard/AdminPanel/Orders/DeliveredOrders/DeliveredOrders";
import CanceledOrders from "../../Pages/Dashboard/AdminPanel/Orders/CanceledOrders/CanceledOrders";
import AddPromoCodes from "../../Pages/Dashboard/AdminPanel/PromoCodes/AddPromoCodes/AddPromoCodes";
import AllPromoCodes from "../../Pages/Dashboard/AdminPanel/PromoCodes/AllPromoCodes/AllPromoCodes";
import UpdatePromoCode from "../../Pages/Dashboard/AdminPanel/PromoCodes/UpdatePromoCode/UpdatePromoCode";
import AllUsers from "../../Pages/Dashboard/AdminPanel/AllUsers/AllUsers";
import AllProducts from "../../Pages/Dashboard/AdminPanel/Products/AllProducts/AllProducts";
import AddNewProducts from "../../Pages/Dashboard/AdminPanel/Products/AddNewProducts/AddNewProducts";

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
                path: 'mens-collections/:category',
                element: <MensCollections />
            },
            {
                path: 'womens-collections/:category',
                element: <WomensCollections />
            },
            {
                path: 'kids-collections/:category',
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
                element: <DashboardHome />,
                children: [
                    {
                        path: 'home',
                        element: <DashboardHome />
                    },
                    {
                        path: 'all-users',
                        element: <AllUsers />
                    },
                    {
                        path: 'all-products',
                        element: <AllProducts />
                    },
                    {
                        path: 'add-product',
                        element: <AddNewProducts />
                    },
                    {
                        path: 'orders',
                        element: <Orders />,
                        children: [
                            {
                                path: "all-orders",
                                element: <AllOrders />
                            },
                            {
                                path: "pending-orders",
                                element: <PendingOrders />
                            },
                            {
                                path: "delivered-orders",
                                element: <DeliveredOrders />
                            },
                            {
                                path: "cancled-orders",
                                element: <CanceledOrders />
                            }
                        ]
                    },
                    {
                        path: "add-promocode",
                        element: <AddPromoCodes />
                    },
                    {
                        path: "all-promocodes",
                        element: <AllPromoCodes />
                    },
                    {
                        path: "update-promocode/:id",
                        element: <UpdatePromoCode />
                    }
                ]
            }
        ]
    }
]);

export default router;