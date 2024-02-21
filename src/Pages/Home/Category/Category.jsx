import { Link } from "react-router-dom";
import { IoMan, IoWoman } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";

const Category = () => {
    return (
        <div className="my-2 mx-3 flex flex-col lg:flex-row justify-between items-center">
            <Link
                to="/mens-collections"
                className="w-full bg-orange-100 text-center text-2xl font-serif font-extrabold border-4 border-transparent py-5 mx-1 my-1 rounded-lg lg:rounded-br-full hover:bg-white hover:border-4 hover:border-green-600 hover:text-green-800"
            >
                <h1 className="flex justify-center items-center"><IoMan className="mr-1" />MEN</h1>
            </Link>
            <Link
                to="/kids-collections"
                className="w-full bg-orange-100 text-center text-2xl font-serif font-extrabold border-4 border-transparent py-5 mx-1 my-1 rounded-lg lg:rounded-b-full hover:bg-white hover:border-4 hover:border-green-600 hover:text-green-800"
            >
                <h1 className="flex justify-center items-center"><FaHandsHoldingChild className="mr-2" />KIDS</h1>
            </Link>
            <Link
                to="/womens-collections"
                className="w-full bg-orange-100 text-center text-2xl font-serif font-extrabold border-4 border-transparent py-5 mx-1 my-1 rounded-lg lg:rounded-bl-full hover:bg-white hover:border-4 hover:border-green-600 hover:text-green-800"
            >
                <h1 className="flex justify-center items-center"><IoWoman className="mr-1" />WOMEN</h1>
            </Link>
        </div>
    );
};

export default Category;