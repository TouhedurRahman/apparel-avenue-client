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
import { FaUsersGear } from "react-icons/fa6";
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
                                    <li><Link to=""><MdDashboardCustomize className="mr-2" />Dashboard</Link></li>
                                    <li><Link to=""><IoHome className="mr-2" />Admin Home</Link></li>
                                    <li><Link to=""><FaUsersGear className="mr-2" />All Users</Link></li>
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
                                            <li><Link to=""><BsMenuButtonFill className="mr-2" />All Products</Link></li>
                                            <li><Link to=""><MdDomainAdd className="mr-2" />Add Product</Link></li>
                                        </div>
                                    }
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            onClick={() => setPromocodeToggle(!promocodeToggle)}
                                        >
                                            < RiCoupon2Fill className="mr-2" />Promocodes
                                        </Link>
                                    </li>
                                    {
                                        promocodeToggle
                                        &&
                                        <div className="ms-5">
                                            <li><Link to=""><RiCoupon3Fill className="mr-2" />All Promocodes</Link></li>
                                            <li><Link to=""><MdDomainAdd className="mr-2" />Add Promocode</Link></li>
                                        </div>
                                    }

                                </>
                                :
                                <>
                                    <li><Link to=""><MdDashboardCustomize className="mr-2" />Dashboard</Link></li>
                                    <li><Link to=""><IoHome className="mr-2" />User Home</Link></li>
                                    <li><Link to=""><TfiMenuAlt className="mr-2" />Orders</Link></li>
                                    <li><Link to="">< GiSelfLove className="mr-2" />Favourites</Link></li>
                                </>
                        }
                        <li><Link> <RiLogoutCircleRFill className="mr-2" />Logout</Link></li>
                    </ul>
                </div>
                <div className="border-2 border-black w-full h-96 mx-1 my-1 p-2">
                    {
                        location?.pathname?.includes('/dashboard')
                            ?
                            <>
                                <div>
                                    <p className="text-xl">
                                        Hey, <span className="font-bold">{singleUser.name}</span> <span className="text-gray-500">(not <span className="font-bold">{singleUser.name}</span>? <span className="hover:text-blue-400 cursor-pointer">Log Out</span>)</span>.
                                    </p>
                                    <p className="my-3 text-xl font-sans text-gray-600">
                                        From your account dashboard you can view your recent orders, manage your shipping and billing addresses, edit profile and account details.
                                    </p>
                                </div>
                                {
                                    isAdmin
                                        ?
                                        <>
                                        </>
                                        :
                                        <>
                                        </>
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