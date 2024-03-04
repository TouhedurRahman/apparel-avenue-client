import axios from 'axios';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartProductSidebar = ({ product, refetch }) => {
    const [quantity, setQuantity] = useState(product.quantity);

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

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='w-full flex flex-row justify-center items-center my-2 shadow-lg shadow-orange-100 rounded-b-lg p-1'>
            <div>
                <Link to={`/product/${product.productID}`}>
                    <img
                        src={product.imageURL}
                        className='h-24 w-16 rounded-lg'
                        alt="Loading..."
                    />
                </Link>
            </div>
            <div className='w-full ms-2'>
                <div className="w-full flex justify-between items-center">
                    <Link to={`/product/${product.productID}`}>
                        <p
                            className="font-bold hover:text-blue-900"
                        >
                            {product.productName}
                        </p>
                    </Link>
                    <button onClick={() => handleDelete()} className="focus:outline-none">
                        <FaTrash className="text-red-500 ml-2" />
                    </button>
                </div>
                <div>
                    <p className='my-1'>
                        <span className='font-bold'>Size: </span>
                        <span className='text-green-800'>{product.size}</span>
                    </p>
                    <p className='my-1 flex justify-between items-center'>
                        <div>
                            <span className='font-bold'>Price: </span>
                            <span className='text-green-800 font-mono'><span className="font-mono mr-1">৳</span>{product.price}/-</span>
                        </div>
                        <div>
                            <p className='font-mono'>
                                X
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleDecrement()}
                                    className="w-4 h-5 flex justify-center items-center bg-green-500 px-2 py-1 rounded-l font-serif font-extrabold text-xl text-white"
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    className="w-8 h-5 text-center border border-green-500 font-bold focus:outline-none"
                                    readOnly
                                />
                                <button
                                    onClick={() => handleIncrement()}
                                    className="w-4 h-5 flex justify-center items-center bg-green-500 px-2 py-1 rounded-r font-serif font-extrabold text-xl text-white"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartProductSidebar;