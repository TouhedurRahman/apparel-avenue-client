import { Link } from "react-router-dom";
import { IoMan, IoWoman } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";

const Category = () => {
    return (
        <div className="h-10 flex flex-col lg:flex-row justify-between items-center mx-3">
            <Link
                to=""
                className="w-full bg-[#40ca91] text-center text-2xl font-serif font-extrabold border py-5 mx-1 my-1 rounded-lg lg:rounded-br-full hover:bg-white hover:border-4 hover:border-green-600 hover:text-green-800"
            >
                <h1 className="flex justify-center items-center"><IoMan className="mr-1" />MEN</h1>
            </Link>
            <Link
                to=""
                className="w-full bg-[#40ca91] text-center text-2xl font-serif font-extrabold border py-5 mx-1 my-1 rounded-lg lg:rounded-b-full hover:bg-white hover:border-4 hover:border-green-600 hover:text-green-800"
            >
                <h1 className="flex justify-center items-center"><FaHandsHoldingChild className="mr-2" />CHILD</h1>
            </Link>
            <Link
                to=""
                className="w-full bg-[#40ca91] text-center text-2xl font-serif font-extrabold border py-5 mx-1 my-1 rounded-lg lg:rounded-bl-full hover:bg-white hover:border-4 hover:border-green-600 hover:text-green-800"
            >
                <h1 className="flex justify-center items-center"><IoWoman className="mr-1" />WOMEN</h1>
            </Link>
        </div>
    );
};

export default Category;