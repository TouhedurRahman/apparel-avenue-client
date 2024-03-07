import { Link } from "react-router-dom";
import useKidsProductsCategory from "../../../Hooks/useKidsProductsCategory";
import useMensProductsCategory from "../../../Hooks/useMensProductsCategory";
import useWomensProductsCategory from "../../../Hooks/useWomensProductsCategory";
import { useState } from "react";

const CategorizeProducts = () => {
    const [mensCategories] = useMensProductsCategory();
    const [womensCategories] = useWomensProductsCategory();
    const [kidsCategories] = useKidsProductsCategory();

    const [mensCategoryBtn, setMensCategoryBtn] = useState(false);
    const [womensCategoryBtn, setWomensCategoryBtn] = useState(false);
    const [kidsCategoryBtn, setKidsCategoryBtn] = useState(false);

    return (
        <div className="pt-2">
            <div className="lg:w-2/3 flex justify-center items-start">
                <div className="w-1/3">
                    <h1 className="text-center p-2 border-b-4 mx-3 border-b-orange-200 font-bold">MENS COLLECTIONS</h1>
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
                    <h1 className="text-center p-2 border-b-4 mx-3 border-b-orange-200 font-bold">WOMENS COLLECTIONS</h1>
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
                    <h1 className="text-center p-2 border-b-4 mx-3 border-b-orange-200 font-bold">KIDS COLLECTIONS</h1>
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
            <div className="w-full">

            </div>
        </div>
    );
};

export default CategorizeProducts;