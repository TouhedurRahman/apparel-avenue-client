import { useState } from "react";
import SelectSize from "../../Components/SelectSize/SelectSize";
import useSingleProduct from "../../Hooks/useSingleProduct";
import QuanntityUpdate from "../../Components/QuanntityUpdate/QuanntityUpdate";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";

const SingleProduct = () => {
    const [products, loading] = useProducts();
    const [product, loadingSingleProduct] = useSingleProduct();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const relatedProducts = products.filter(
        relatedProduct =>
            (relatedProduct.forGender === product.forGender)
            &&
            (relatedProduct._id !== product._id)
    );

    // Function to handle size selection
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
                        <div className="hero w-full">
                            <div className="hero-content w-full flex-col items-center lg:items-start lg:flex-row">
                                <div className="w-1/2">
                                    <img
                                        src={product.imageURL}
                                        className="w-full h-96 px-3" />
                                </div>
                                <div className="w-1/2">
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
                                                    ৳ {product.discountPrice}/-
                                                </>
                                        }
                                    </h2>
                                    <p className="text-xl font-semibold">Available Sizes</p>
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
                                    <p className="text-xl font-semibold">Description</p>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam, inventore ducimus autem voluptatem, quisquam incidunt fugit officiis facilis fuga corporis laudantium. Commodi aliquid eveniet, veniam voluptatum porro odit alias.
                                    </p>
                                </div>
                            </div>
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