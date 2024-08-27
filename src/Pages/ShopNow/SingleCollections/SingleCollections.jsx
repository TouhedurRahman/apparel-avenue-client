import { useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import { useParams } from "react-router-dom";

const SingleCollections = ({ title, img, products, categories, loading }) => {
    let { category } = useParams();

    const [showCategory, setShowCategory] = useState(category || 'all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    const handleCategoryChange = (e) => {
        setShowCategory(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredProducts = showCategory === "all"
        ? products
        : products.filter(product => product.category === showCategory);

    const searchedProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(searchedProducts.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="mb-10">
                <CoverImage
                    img={img}
                    title={title}
                />
            </div>
            {loading ? (
                <div className="flex justify-center items-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-5 mx-5">
                        <div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="input border-2 border-green-400 shadow-lg shadow-orange-200 text-center font-bold hover:border-orange-400 w-[300px] focus:border-orange-400 focus:shadow-lg focus:shadow-green-200 focus:outline-none"
                            />
                        </div>
                        <div className="flex justify-end items-center">
                            <p className="mr-1 font-bold italic">
                                Filtered by
                            </p>
                            <select
                                value={showCategory}
                                onChange={handleCategoryChange}
                                className="select border-2 border-green-400 shadow-lg shadow-orange-200 text-center font-bold hover:border-orange-400 w-[200px] ml-1 focus:border-orange-400 focus:shadow-lg focus:shadow-green-200 focus:outline-none"
                            >
                                <option value="all">All</option>
                                {categories.map((categorySingle, index) => {
                                    const categoryName = categorySingle.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                    return (
                                        <option
                                            key={index}
                                            value={categorySingle.category}
                                        >
                                            {categoryName}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-5">
                        {currentProducts.map(product => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={previousPage}
                            className={`btn mx-1 px-4 py-2 rounded-full transition duration-300 ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-400 hover:bg-orange-400 text-white shadow-lg hover:shadow-xl'
                                }`}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`btn mx-1 px-4 py-2 rounded-full transition duration-300 ${index + 1 === currentPage ? 'bg-orange-400 text-white shadow-lg hover:shadow-xl' : 'bg-green-400 hover:bg-orange-400 text-white shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={nextPage}
                            className={`btn mx-1 px-4 py-2 rounded-full transition duration-300 ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-400 hover:bg-orange-400 text-white shadow-lg hover:shadow-xl'
                                }`}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleCollections;