import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import useAuth from "../../../Hooks/useAuth";
import useLogOut from "../../../Hooks/useLogOut";
import useSingleUser from "../../../Hooks/useSingleUser";
import MyCartSidebar from "../../Cart/MyCartSidebar/MyCartSidebar";
import useMyCart from "../../../Hooks/useMyCart";

const Navbar = () => {
    const { user } = useAuth();
    const [singleUser] = useSingleUser();
    const [cartProduct] = useMyCart();
    const handleLogOut = useLogOut();

    const navOptions = <>
        <li>
            <Link
                to="/"
                className="mx-3 border-b-4 rounded-none border-b-transparent hover:border-b-white hover:bg-transparent"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                to="/shop-now"
                className="mx-3 border-b-4 rounded-none border-b-transparent hover:border-b-white hover:bg-transparent"
            >
                Shop Now
            </Link>
        </li>
        <li>
            <Link
                className="mx-3 border-b-4 rounded-none border-b-transparent hover:border-b-white hover:bg-transparent"
            >
                Feedback
            </Link>
        </li>
    </>
    return (
        <>
            <div className="navbar fixed fixed-top z-[1] bg-[#40ca91] px-2 lg:px-10 text-4xl font-extrabold font-serif">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#40ca91] rounded-box rounded-t-none w-52">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <Link to="/">
                        <img
                            src="../../../../src/assets/images/Logo/apperal-avenue-logo.png"
                            className="w-24 md:w-40 lg:w-40 h-16"
                            alt="Logo..."
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex">
                        {/***** Favourite section *****/}
                        <div className="my-auto flex items-center btn-transparent text-3xl hover:bg-green-200 p-1 cursor-pointer rounded-lg shadow-lg mx-3">
                            < GiSelfLove />
                            <div className="badge bg-green-300 ml-1 text-green-900 p-2">{99}</div>
                        </div>

                        {/***** cart section *****/}
                        <div className="drawer drawer-end my-auto">
                            <input id="my-cart-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-cart-drawer" className="flex items-center drawer-button btn-transparent text-3xl hover:bg-green-200 p-1 cursor-pointer rounded-lg shadow-lg my-auto mx-3">
                                    <FaCartArrowDown />
                                    <div className="badge bg-green-300 ml-1 text-green-900 p-2">
                                        {
                                            cartProduct.length < 10
                                                ?
                                                `0${cartProduct.length}`
                                                :
                                                `${cartProduct.length}`
                                        }
                                    </div>
                                </label>
                            </div>
                            <div className="drawer-side mt-20 z-[1]">
                                <label htmlFor="my-cart-drawer" aria-label="close sidebar" className=""></label>
                                <ul className="menu p-4 w-[350px] min-h-full bg-green-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <div className="flex justify-between items-center mr-7">
                                        <p className="text-xl">Shopping Cart</p>
                                        <label htmlFor="my-cart-drawer" className="drawer-button btn-transparent cursor-pointer hover:bg-green-400 p-2 rounded-lg">❌ Close</label>
                                    </div>
                                    <hr className="border-black border-b-2 my-4 mr-7" />
                                    <MyCartSidebar />
                                </ul>
                            </div>
                        </div>

                        {/***** Login & profile section *****/}
                        {
                            user
                                ?
                                <div className="dropdown dropdown-bottom dropdown-end ml-3 my-auto">
                                    <div tabIndex={0} role="button" className="mt-2">
                                        <div className="avatar">
                                            <div
                                                className="w-10 h-10 rounded-full ring ring-green-600 ring-offset-orange-100 ring-offset-2">
                                                <img
                                                    src={
                                                        singleUser.profilePicture
                                                            ?
                                                            `${singleUser.profilePicture}`
                                                            :
                                                            "https://i.ibb.co/6r3zmMg/user.jpg"
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#40ca91] rounded-box w-52 rounded-t-none shadow-0">
                                        <li><Link to="my-profile"><FaCircleUser />Profile</Link></li>
                                        <li><Link to="/dashboard"><MdDashboardCustomize />Dashboard</Link></li>
                                        <li><Link onClick={handleLogOut}><RiLogoutCircleRFill />Log Out</Link></li>
                                    </ul>
                                </div>
                                :
                                <div className="my-auto ">
                                    <Link to="/login" className="btn btn-ghost mx-3 border-b-4 rounded-none border-b-transparent hover:border-b-white hover:bg-transparent">Login</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;