import { FaTrash } from "react-icons/fa6";
import QuanntityUpdate from "../../../Components/QuanntityUpdate/QuanntityUpdate";
import { useState } from "react";

const CartProductMain = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.size);
    const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleIncrement = () => {

    }

    const handleDecrement = () => {

    }
    const handleDelete = () => {

    }

    return (
        <div>
            <div className="flex justify-start items-center m-2 bg-white rounded-lg shadow-lg shadow-orange-300">
                <div className="avatar p-3">
                    <div className="w-24 rounded">
                        <img src={product.imageURL} />
                    </div>
                </div>
                <div className="w-full flex flex-col p-5">
                    <div className="w-full flex justify-between items-center mb-5">
                        <p
                            className="text-2xl font-bold"
                        >
                            {product.productName}
                        </p>
                        <button onClick={() => handleDelete()} className="focus:outline-none">
                            <FaTrash className="text-red-500" />
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-between items-center">
                        <p className="w-[25%]">
                            <div className="w-full flex flex-row justify-start items-center">
                                <label htmlFor="size" className="font-bold mr-2">
                                    Size
                                </label>
                                <select
                                    id="size"
                                    name="size"
                                    value={selectedSize}
                                    onChange={handleSizeChange}
                                    className="w-24 h-8 text-center font-bold border border-green-400 rounded-lg cursor-pointer focus:outline-none"
                                >
                                    {sizeOptions.map((size, index) => (
                                        <option
                                            key={index}
                                            value={size}
                                        >
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </p>
                        <p className="w-[25%] ">
                            <span className="font-bold mr-1">Price </span>৳ {product.price}/-
                        </p>
                        <div className="w-[25%] flex justify-center items-center">
                            <span className="font-bold mr-2">Quantity </span>
                            <QuanntityUpdate
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                                quantity={product.quantity}
                            />
                        </div>
                        <p className="w-[25%] flex flex-row justify-end items-center">
                            <span className="font-bold mr-2">Total Price </span>৳ {(product.price) * (product.quantity)}/-
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductMain;