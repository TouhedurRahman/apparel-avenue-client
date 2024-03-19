import CoverImage from "../../Shared/CoverImage/CoverImage";
import dashboardBannerImage from "../../../../src/assets/images/Banner/banner-9.jpg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdDashboardCustomize, MdDomainAdd } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { GiSelfLove } from "react-icons/gi";
import { RiCoupon2Fill, RiCoupon3Fill, RiLogoutCircleRFill, RiMenuSearchFill } from "react-icons/ri";
import { useState } from "react";
import { BsMenuButtonFill } from "react-icons/bs";
import { FaMapLocationDot, FaUsersGear } from "react-icons/fa6";
import useSingleUser from "../../../Hooks/useSingleUser";

const DashboardHome = () => {
    const [singleUser] = useSingleUser();
    const [productsToggle, setProductsToggle] = useState(false);
    const [promocodeToggle, setPromocodeToggle] = useState(false);

    const location = useLocation();

    const isAdmin = true;

    return (
        <div className="pt-20">
            <CoverImage
                title={"My Dashboard"}
                img={dashboardBannerImage}
            />
            <div className="w-full flex flex-col lg:flex-row justify-center items-start mt-2 px-3">
                <div className="border-2 border-black w-full lg:w-[30%] mx-1 my-1">
                    <ul className="menu p-4 w-full min-h-full text-xl font-bold">
                        <p className="text-2xl font-bold font-serif">
                            My Account
                        </p>
                        <div className='w-full'>
                            <hr className="border-green-600 my-4" />
                        </div>
                        {
                            isAdmin
                                ?
                                <>
                                    <li><Link to="/dashboard/home"><MdDashboardCustomize className="mr-2" />Dashboard</Link></li>
                                    <li><Link to=""><IoHome className="mr-2" />Admin Home</Link></li>
                                    <li><Link to="/dashboard/all-users"><FaUsersGear className="mr-2" />All Users</Link></li>
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            onClick={() => setProductsToggle(!productsToggle)}
                                        >
                                            <RiMenuSearchFill className="mr-2" />Products
                                        </Link>
                                    </li>
                                    {
                                        productsToggle
                                        &&
                                        <div className="ms-5">
                                            {/* <li><Link to=""><BsMenuButtonFill className="mr-2" />All Products</Link></li> */}
                                            <li><Link to=""><MdDomainAdd className="mr-2" />Add Product</Link></li>
                                        </div>
                                    }
                                    <li>
                                        <Link
                                            to="/dashboard/all-promocodes"
                                            onClick={() => setPromocodeToggle(!promocodeToggle)}
                                        >
                                            < RiCoupon2Fill className="mr-2" />Promocodes
                                        </Link>
                                    </li>
                                    {
                                        promocodeToggle
                                        &&
                                        <div className="ms-5">
                                            {/* <li><Link to="/dashboard/all-promocodes"><RiCoupon3Fill className="mr-2" />All Promocodes</Link></li> */}
                                            <li><Link to="/dashboard/add-promocode"><RiCoupon3Fill className="mr-2" />Add Promocode</Link></li>
                                        </div>
                                    }
                                    <li><Link to="/dashboard/orders/all-orders"><TfiMenuAlt className="mr-2" />Orders</Link></li>

                                </>
                                :
                                <>
                                    <li><Link to=""><MdDashboardCustomize className="mr-2" />Dashboard</Link></li>
                                    <li><Link to=""><IoHome className="mr-2" />User Home</Link></li>
                                    <li><Link to="">< GiSelfLove className="mr-2" />Favourites</Link></li>
                                    <li><Link to=""><TfiMenuAlt className="mr-2" />Orders</Link></li>
                                    <li><Link to="">< FaMapLocationDot className="mr-2" />Address</Link></li>
                                </>
                        }
                        <li><Link> <RiLogoutCircleRFill className="mr-2" />Logout</Link></li>
                    </ul>
                </div>
                <div className="border-2 border-black w-full mx-1 my-1 p-2">
                    {
                        location?.pathname?.includes('/dashboard/home')
                            ?
                            <>
                                <div className="pb-5">
                                    <p className="text-xl">
                                        👋 Hey, <span className="font-bold">{singleUser.name}</span> <span className="text-gray-500">(not <span className="font-bold">{singleUser.name}</span>? <span className="hover:text-blue-400 cursor-pointer">Log Out</span>)</span>.
                                    </p>
                                    <p className="my-3 text-xl font-sans text-gray-600 text-justify">
                                        From your account dashboard you can view your recent orders, manage your shipping and billing addresses, edit profile and account details.
                                    </p>
                                </div>
                                {
                                    isAdmin
                                        ?
                                        <div className="grid grid-cols md:grid-cols-3 gap-4 mx-10">
                                            <Link to="" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <IoHome className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        Admin Home
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/dashboard/all-users" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <FaUsersGear className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        All Users
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <RiMenuSearchFill className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        All Products
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <MdDomainAdd className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        Add Products
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/dashboard/all-promocodes" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <RiCoupon2Fill className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        All Promocodes
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/dashboard/add-promocode" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <RiCoupon3Fill className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        Add Promocode
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/dashboard/orders/all-orders" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <TfiMenuAlt className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        Orders
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        :
                                        <div className="grid grid-cols md:grid-cols-2 gap-4 mx-10">
                                            <Link to="" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <IoHome className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        User Home
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <GiSelfLove className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        Favourites
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <TfiMenuAlt className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        Orders
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="" className="flex flex-col justify-center items-center border-2 border-green-400 hover:border-orange-400 p-3 rounded-lg hover:shadow-lg hover:shadow-green-300">
                                                <div>
                                                    <FaMapLocationDot className="w-24 h-24 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-4xl text-gray-600 font-bold mt-3 mb-2">
                                                        Address
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                }
                            </>
                            :
                            <>
                                {
                                    <Outlet />
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;