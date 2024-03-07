import { useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import { useParams } from "react-router-dom";

const SingleCollections = ({ title, img, products, categories, loading }) => {
    let { category } = useParams();

    const [showCategory, setShowCategory] = useState(category || 'all');

    const filterCategory = products.filter(singleCategory => singleCategory.category === showCategory);

    const handleCategoryChange = (e) => {
        setShowCategory(e.target.value);
    }

    return (
        <div>
            <div className="mb-10">
                <CoverImage
                    img={img}
                    title={title}
                />
            </div>
            {
                loading
                    ?
                    <div className="flex justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                    :
                    <>
                        <div className="flex justify-end items-center mb-5 mx-5">
                            <p className="mr-1 font-bold italic">

                                Filtered by
                            </p>
                            <select
                                value={showCategory}
                                onChange={handleCategoryChange}
                                className="select border-2 border-green-400 shadow-lg shadow-orange-200 text-center font-bold hover:border-orange-400 w-[200px]  ml-1 focus:border-orange-400 focus:shadow-lg focus:shadow-green-200 focus:outline-none"
                            >
                                <option value="all">All</option>
                                {
                                    categories.map((categorySingle, index) => {
                                        const categoryName = categorySingle.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                        return (
                                            <option
                                                key={index}
                                                value={categorySingle.category}
                                            >
                                                {categoryName}
                                            </option>
                                        );
                                    })
                                }
                            </select>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-5">
                            {

                                showCategory === "all"
                                    ?
                                    products.map(product => <ProductCard
                                        key={product._id}
                                        product={product}
                                    ></ProductCard>)
                                    :
                                    filterCategory.map(product => <ProductCard
                                        key={product._id}
                                        product={product}
                                    ></ProductCard>)


                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default SingleCollections;