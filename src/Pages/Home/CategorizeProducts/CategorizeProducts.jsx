import { Link } from "react-router-dom";
import useKidsProductsCategory from "../../../Hooks/useKidsProductsCategory";
import useMensProductsCategory from "../../../Hooks/useMensProductsCategory";
import useWomensProductsCategory from "../../../Hooks/useWomensProductsCategory";
import { useState } from "react";
import useOrders from "../../../Hooks/useOrders";

const CategorizeProducts = () => {
    const [mensCategories] = useMensProductsCategory();
    const [womensCategories] = useWomensProductsCategory();
    const [kidsCategories] = useKidsProductsCategory();
    const [orders] = useOrders();

    const [mensCategoryBtn, setMensCategoryBtn] = useState(false);
    const [womensCategoryBtn, setWomensCategoryBtn] = useState(false);
    const [kidsCategoryBtn, setKidsCategoryBtn] = useState(false);

    let renderedImages = {};

    return (
        <div className="pt-2 flex flex-col lg:flex-row jyustify-between items-star mb-10">
            <div className="lg:w-8/12 flex justify-center items-start lg:pl-2">
                <div className="w-1/3">
                    <h1 className="text-center p-2 mx-3 border-t-4 border-b-4  border-t-green-400 border-b-orange-400 font-bold">MENS COLLECTIONS</h1>
                    <div className="flex flex-col justify-center items-center shadow-lg shadow-green-100 py-3 rounded-bl-[50px] border-r-2 border-b-2 border-orange-500 mx-1 hover:bg-green-50 hover:shadow-orange-100">
                        {
                            mensCategories.slice(0, mensCategoryBtn ? mensCategories.length : 3).map(categorySingle => (
                                <Link
                                    to={`/mens-collections/${categorySingle.category}`}
                                    key={categorySingle._id}
                                    className="w-24 py-1 my-1 font-bold border-b-2 border-b-black rounded-lg text-center hover:bg-orange-200"
                                >
                                    {categorySingle.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </Link>
                            ))
                        }
                        {mensCategories.length > 3 && (
                            <button
                                onClick={() => setMensCategoryBtn(!mensCategoryBtn)}
                                className="text-blue-600 hover:link"
                            >
                                {mensCategoryBtn ? '...See less' : 'See more...'}
                            </button>
                        )}
                    </div>
                </div>
                <div className="w-1/3">
                    <h1 className="text-center p-2 mx-3 border-t-4 border-b-4  border-t-green-400 border-b-orange-400 font-bold">WOMENS COLLECTIONS</h1>
                    <div className="flex flex-col justify-center items-center shadow-lg shadow-green-100 py-3 rounded-bl-[50px] border-r-2 border-b-2 border-orange-500 mx-1 hover:bg-green-50 hover:shadow-orange-100">
                        {
                            womensCategories.slice(0, womensCategoryBtn ? womensCategories.length : 3).map(categorySingle => (
                                <Link
                                    to={`/womens-collections/${categorySingle.category}`}
                                    key={categorySingle._id}
                                    className="w-24 py-1 my-1 font-bold border-b-2 border-b-black rounded-lg text-center hover:bg-orange-200"
                                >
                                    {categorySingle.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </Link>
                            ))
                        }
                        {womensCategories.length > 3 && (
                            <button
                                onClick={() => setWomensCategoryBtn(!womensCategoryBtn)}
                                className="text-blue-600 hover:link"
                            >
                                {womensCategoryBtn ? '...See less' : 'See more...'}
                            </button>
                        )}
                    </div>
                </div>
                <div className="w-1/3">
                    <h1 className="text-center p-2 mx-3 border-t-4 border-b-4  border-t-green-400 border-b-orange-400 font-bold">KIDS COLLECTIONS</h1>
                    <div className="flex flex-col justify-center items-center shadow-lg shadow-green-100 py-3 rounded-bl-[50px] border-r-2 border-b-2 border-orange-500 mx-1 hover:bg-green-50 hover:shadow-orange-100">
                        {
                            kidsCategories.slice(0, kidsCategoryBtn ? kidsCategories.length : 3).map(categorySingle => (
                                <Link
                                    to={`/kids-collections/${categorySingle.category}`}
                                    key={categorySingle._id}
                                    className="w-24 py-1 my-1 font-bold border-b-2 border-b-black rounded-lg text-center hover:bg-orange-200"
                                >
                                    {categorySingle.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </Link>
                            ))
                        }
                        {kidsCategories.length > 3 && (
                            <button
                                onClick={() => setKidsCategoryBtn(!kidsCategoryBtn)}
                                className="text-blue-600 hover:link"
                            >
                                {kidsCategoryBtn ? '...See less' : 'See more...'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-4/12  border-black lg:mr-5 mt-10 lg:mt-0 px-5 lg:px-0 lg:pl-5">
                <p className=" flex justify-end items-center text-green-700 text-3xl font-extrabold border-r-8 border-r-orange-600 p-2">
                    LAST SALE
                </p>
                <div className="mt-2 mb-1 flex justify-start items-center overflow-x-auto">
                    {orders.map(order => (
                        <div key={order._id} className="flex">
                            {order.orderProducts.map(product => {
                                if (!renderedImages[product.imageURL]) {
                                    renderedImages[product.imageURL] = true;
                                    return (
                                        <div
                                            key={product._id}
                                            className="ml-2 w-36 h-36 card rounded-none border-2 border-transparent hover:border-green-700"
                                        >
                                            <figure>
                                                <Link to={`/product/${product.productId}`}>
                                                    <img
                                                        src={product.imageURL}
                                                        alt="Loading..."
                                                        className="w-36 h-36"
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorizeProducts;