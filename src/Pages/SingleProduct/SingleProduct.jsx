import { useState } from "react";
import SelectSize from "../../Components/SelectSize/SelectSize";
import useSingleProduct from "../../Hooks/useSingleProduct";
import QuanntityUpdate from "../../Components/QuanntityUpdate/QuanntityUpdate";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Transition } from "@headlessui/react";
import ShareSocialMedia from "../../Components/ShareSocialMedia/ShareSocialMedia";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const SingleProduct = () => {
    const { user } = useAuth();
    const [products, loading] = useProducts();
    const [product, loadingSingleProduct] = useSingleProduct();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [showAll, setShowAll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    const url = location.pathname;
    const relatedProducts = products.filter(
        relatedProduct =>
            (relatedProduct.forGender === product.forGender)
            &&
            (relatedProduct._id !== product._id)
    );

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        console.log(size);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = (product) => {
        const cartProduct = {
            userEmail: user.email,
            productName: product.name,
            imageURL: product.imageURL,
            size: selectedSize,
            quantity: quantity,
            price: quantity * (product.discountPrice)
        }

        const url = 'http://localhost:5000/cart';
        axios.post(url, cartProduct)
            .then(response => {
                if (response.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Product is added to the cart!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...!",
                    text: "Product is already in cart!",
                });
            });
    };

    return (
        <div className='pt-20'>
            <div>
                {
                    loadingSingleProduct
                        ?
                        <div className="flex justify-center items-center">
                            <span className="loading loading-dots loading-lg"></span>
                        </div>
                        :
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-5 lg:mx-10 my-2">
                                <div className="w-full flex flex-col items-center">
                                    <div className="w-full lg:w-[85%] pt-3">
                                        <img
                                            src={product.imageURL}
                                            className="w-full h-96 pt-3" />
                                    </div>
                                    <div className="w-full lg:w-[85%] border border-gray-300 rounded-lg mt-2">
                                        <div
                                            className="flex justify-between items-center px-4 py-2 cursor-pointer
                                        bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 rounded-t-lg
                                        "
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            <h3 className="text-lg font-medium">
                                                Size Chart  (Expected Deviation 3%)
                                            </h3>
                                            <button className="text-black text-2xl font-serif font-extrabold focus:outline-none">
                                                {isOpen ? '-' : '+'}
                                            </button>
                                        </div>
                                        <Transition
                                            show={isOpen}
                                            enter="transition-opacity duration-200"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition-opacity duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            {(ref) => (
                                                <div ref={ref} className="px-4 py-2 border-t border-2 border-green-400">
                                                    <p>This is the accordion content!</p>
                                                </div>
                                            )}
                                        </Transition>
                                    </div>
                                </div>
                                <div className="w-full pt-5 pl-2">
                                    <h1 className="text-4xl font-serif font-bold">{product.name}</h1>
                                    {
                                        product.discountRate > 0
                                        &&
                                        <div
                                            className="w-48 mt-4 bg-orange-100 rounded-r-lg border-2 border-green-200 text-center font-bold"
                                        >
                                            Save {product.discountRate}%
                                        </div>
                                    }
                                    <h2 className="card-title flex justify-start items-center my-3">
                                        {
                                            product.discountRate > 0
                                                ?
                                                <>
                                                    <span className="text-gray-500">
                                                        ৳ <del>{product.price}/-</del>
                                                    </span>
                                                    <span className="flex justify-center items-center">
                                                        ৳ <span className="text-3xl font-sans font-bold">{product.discountPrice}</span>/-
                                                    </span>
                                                </>
                                                :
                                                <>
                                                    ৳ <span className="text-3xl font-sans font-bold">{product.discountPrice}</span>/-
                                                </>
                                        }
                                    </h2>
                                    <p className="text-xl font-serif font-bold">Available Sizes</p>
                                    <div>
                                        <SelectSize
                                            selectedSize={selectedSize}
                                            setSelectedSize={setSelectedSize}
                                            handleSizeSelection={handleSizeSelection}
                                        />
                                    </div>
                                    <div className="mt-10">
                                        <QuanntityUpdate
                                            quantity={quantity}
                                            handleIncrement={handleIncrement}
                                            handleDecrement={handleDecrement}
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <button
                                            className="mr-2 btn px-10 py-3 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to cart
                                        </button>
                                        <button
                                            className="ml-2 btn px-10 py-3 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600"
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                    <div className='w-full'>
                                        <hr className="border-black border-b-2 my-4" />
                                    </div>
                                    <p className="text-xl font-serif font-bold">Description</p>
                                    <div className="py-3 font-semibold">
                                        {
                                            product.description.split('. ').map((line, index) => (
                                                (!showAll && index >= 3)
                                                    ?
                                                    null
                                                    :
                                                    (
                                                        <p key={index} className="list-disc pl-4">
                                                            • {line}{index === product.description.split('. ').length - 1 ? '' : '.'}
                                                        </p>
                                                    )
                                            ))
                                        }
                                        {
                                            product.description.split('. ').length > 3 && (
                                                <button
                                                    className="text-blue-500 hover:link"
                                                    onClick={() => setShowAll(!showAll)}
                                                >
                                                    {showAll ? '...Show less' : 'Show more...'}
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <ShareSocialMedia
                                url={url}
                            />
                        </div>
                }
                <div className="mx-5">
                    <h2
                        className="w-64 px-3 pt-2 text-2xl font-semibold font-serif bg-green-400 border-2 border-black border-b-0 rounded-tr-full relative"
                    >
                        You may also like
                    </h2>
                    <div className='w-full'>
                        <hr className="border-black border-b-2" />
                    </div>
                    <div className="mt-5">
                        {
                            loading
                                ?
                                <div className="flex justify-center items-center">
                                    <span className="loading loading-dots loading-lg"></span>
                                </div>
                                :
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-5">
                                    {
                                        relatedProducts.slice(0, 8).map(product => <ProductCard
                                            key={product._id}
                                            product={product}
                                        ></ProductCard>)
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;