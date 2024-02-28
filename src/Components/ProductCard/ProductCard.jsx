import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const ProductCard = ({ product }) => {
    const {
        _id,
        name,
        category,
        forGender,
        size,
        price,
        discountRate,
        discountPrice,
        description,
        imageURL
    } = product;

    const handleFavourite = (e) => {
        console.log("Favourite Added");

        e.preventDefault();
        e.stopPropagation();
    };

    const handleAddToCart = (e) => {
        console.log("Add to cart");

        e.preventDefault();
        e.stopPropagation();
    };

    const handleBuyNow = (id) => {
        console.log(id)
    }

    return (
        <div>
            <Link
                to={`/product/${_id}`}
                reloadDocument={true}
                className="card card-compact mx-3 bg-green-200 border-2 border-orange-100 border-b-0 rounded-none group relative"
            >
                <figure><img className="w-full h-72" src={imageURL} alt="Loading..." /></figure>
                {
                    discountRate > 0
                    &&
                    <div className="absolute bg-orange-300 m-3 px-3 py-1 rounded-lg border border-green-700 font-serif font-extrabold">
                        -{discountRate}%
                    </div>
                }
                <div className="hidden w-full h-64 lg:group-hover:flex justify-end items-center absolute">
                    <div
                        className="m-2 p-1 bg-green-100 border border-orange-600 rounded-badge text-2xl"
                    >
                        <FaHeart
                            className="my-5 mx-2"
                            onClick={(e) => handleFavourite(e)}
                        />
                        <FaCartArrowDown
                            className="my-5 mx-2"
                            onClick={(e) => handleAddToCart(e)}
                        />
                    </div>
                </div>
                <div className="w-full h-64 flex justify-end items-center absolute lg:hidden">
                    <div
                        className="m-2 p-1 bg-green-100 border border-orange-600 rounded-badge text-2xl"
                    >
                        <FaHeart
                            className="my-5 mx-2"
                            onClick={(e) => handleFavourite(e)}
                        />
                        <FaCartArrowDown
                            className="my-5 mx-2"
                            onClick={(e) => handleAddToCart(e)}
                        />
                    </div>
                </div>
                {
                    discountRate > 0
                    &&
                    <div
                        className="absolute w-1/2 mx-[25%] bg-orange-300 mt-[265px] lg:px-4 py-1 rounded-lg border-4 border-green-200 text-center font-serif font-extrabold"
                    >
                        Save ৳ {price - discountPrice}/-
                    </div>
                }
                <div className="card-body">
                    <h2 className="card-title flex justify-center items-center mt-2">{name}</h2>
                    <h2 className="card-title flex justify-center items-center">
                        {
                            discountRate > 0
                                ?
                                <>
                                    <span className="text-gray-500">৳ <del>{price}/-</del></span> ৳ {discountPrice}/-
                                </>
                                :
                                <>
                                    ৳ {discountPrice}/-
                                </>
                        }
                    </h2>
                </div>
            </Link>
            <div className="flex justify-center items-center mx-3 bg-green-200 border-2 border-orange-100 border-t-0">
                <button
                    className="w-full btn rounded-none bg-green-400 font-serif font-extrabold hover:bg-white hover:border-orange-300 hover:text-orange-800"
                    onClick={() => handleBuyNow(_id)}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;