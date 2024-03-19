import { Link } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";
import useProducts from "../../../../../Hooks/useProducts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";

const AllProducts = () => {
    const [products, loading, refetch] = useProducts();
    const [productData, setProductData] = useState(null);

    const openModal = (product) => {
        setProductData(product)
        document.getElementById('my_modal').showModal();
    }

    const closeModal = () => {
        document.getElementById('my_modal').close();
    }

    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <div>
            {
                loading
                    ?
                    <>
                        <div className="flex justify-center items-center">
                            <Loading />
                        </div>
                    </>
                    :
                    <>
                        <h1 className="text-xl font-bold my-5 text-center font-serif">All Products</h1>
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <Link to="/dashboard/add-product" className="btn my-2 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600">Add New Prduct</Link>
                            <p className="text-xl font-bold text-center font-serif">Total Product(s): {(products.length) < 10 ? `0${products.length}` : `${products.length}`}</p>
                        </div>
                        <div className="mt-5">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th
                                                className="text-center"
                                            >
                                                Sl. No.</th>
                                            <th>Product</th>
                                            <th className="text-center">Price - Discount Rate</th>
                                            <th className="text-right">Discount Price(৳)/-</th>
                                            <th className="text-center">Details</th>
                                            <th className="text-center">Update</th>
                                            <th className="text-center">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((product, idx) => (
                                                <tr
                                                    key={product._id}
                                                >
                                                    <td
                                                        className="text-center"
                                                    >
                                                        {
                                                            (idx + 1) < 10
                                                                ?
                                                                `0${idx + 1}`
                                                                :
                                                                `${idx + 1}`
                                                        }
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={product.imageURL} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{product.name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <p>
                                                            <span className="font-mono mr-1">৳</span>({product.price} - {product.discountRate}%)/-
                                                        </p>
                                                    </td>
                                                    <td className="text-right">
                                                        <p>
                                                            <span className="font-mono mr-1">৳</span>{product.discountPrice}/-
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center items-center">
                                                            <button
                                                                className="w-28 btn mx-auto my-1 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 shadow-lg"
                                                                onClick={() => openModal(product)}
                                                            >
                                                                <span className='flex justify-between items-center '>
                                                                    Details
                                                                    <TbListDetails size={24} className='text-yellow-800 font-extrabold ml-2' />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center items-center">
                                                            <Link
                                                                to={`/dashboard/update-product/${product._id}`}
                                                            >
                                                                <FaEdit className="text-2xl text-yellow-700 mx-2 cursor-pointer" />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center items-center">
                                                            <FaTrashAlt
                                                                onClick={() => handleDelete(product._id)}
                                                                className="text-2xl text-red-500 mx-2 cursor-pointer"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                {/* modal */}
                                <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <div>
                                            <h3 className="text-xl font-bold text-center bg-green-200 my-2 rounded-lg">Description</h3>
                                            <p className="text-justify">{productData?.description}</p>

                                            <h3 className="text-xl font-bold text-center bg-green-200 my-2 rounded-lg">Sizes</h3>
                                            <div className="overflow-x-auto">
                                                <table className="table">
                                                    {/* head */}
                                                    <thead>
                                                        <tr>
                                                            <th>Sizes</th>
                                                            <th>Quantity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* row 1 */}
                                                        <tr>
                                                            <th>M</th>
                                                            <td>{productData?.size?.M}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>L</th>
                                                            <td>{productData?.size?.L}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>XL</th>
                                                            <td>{productData?.size?.XL}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>XXL</th>
                                                            <td>{productData?.size?.XXL}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p className="text-center font-bold italic">
                                                    For {productData?.forGender}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="modal-action flex justify-center items-center">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button
                                                    className="w-28 btn mx-auto my-1 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600"
                                                    onClick={closeModal}
                                                >
                                                    OK
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default AllProducts;