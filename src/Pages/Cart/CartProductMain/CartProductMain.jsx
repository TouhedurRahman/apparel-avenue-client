import { FaTrash } from "react-icons/fa6";
import QuanntityUpdate from "../../../Components/QuanntityUpdate/QuanntityUpdate";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const CartProductMain = ({ product, newCart, setNewCart, refetch }) => {
    const [selectedSize, setSelectedSize] = useState(product.size);
    const [quantity, setQuantity] = useState(product.quantity);
    const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setSelectedSize(newSize);

        const currentItem = newCart.find(item => item._id === product._id);
        const restItem = newCart.filter(item => item._id !== product._id);

        currentItem.size = newSize;
        setNewCart([...restItem, currentItem]);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        const currentItem = newCart.find(item => item._id === product._id);
        const restItem = newCart.filter(item => item._id !== product._id);
        currentItem.quantity = currentItem.quantity + 1;
        setNewCart([...restItem, currentItem]);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            const currentItem = newCart.find(item => item._id === product._id);
            const restItem = newCart.filter(item => item._id !== product._id);
            currentItem.quantity = currentItem.quantity - 1;
            setNewCart([...restItem, currentItem]);
        }
    };

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/cart/${product._id}`)
                    .then(response => {
                        if (response.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-start items-center m-2 bg-white rounded-lg shadow-lg shadow-orange-100">
                <div className="avatar p-3">
                    <div className="w-16 h-40 lg:w-24 lg:h-24 rounded">
                        <img src={product.imageURL} />
                    </div>
                </div>
                <div className="w-full flex flex-col p-2 lg:p-5">
                    <div className="w-full flex justify-between items-center lg:mb-5">
                        <p
                            className="text-2xl font-bold"
                        >
                            {product.productName}
                        </p>
                        <button onClick={() => handleDelete()} className="focus:outline-none">
                            <FaTrash className="text-red-500 text-2xl" />
                        </button>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-start
                     lg:justify-between lg:items-center">
                        <p className="lg:w-[25%]">
                            <div className="mt-3 lg:mt-0 w-full flex flex-row justify-start items-center">
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
                        <p className="mt-3 lg:mt-0 lg:w-[25%] ">
                            <span className="font-bold mr-1">Price </span><span className="font-mono mr-1">৳</span>{product.price}/-
                        </p>
                        <div className="lg:w-[25%] mt-3 lg:mt-0 flex lg:justify-center items-center">
                            <span className="font-bold mr-2">Quantity </span>
                            <QuanntityUpdate
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                                quantity={quantity}
                            />
                        </div>
                        <p className="lg:w-[25%] mt-3 lg:mt-0 flex flex-row lg:justify-end items-center">
                            <span className="font-bold mr-2">Total Price </span><span className="font-mono mr-1">৳</span>{(product.price * quantity)}/-
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductMain;