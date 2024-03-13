import useOrders from '../../../../../Hooks/useOrders';
import Loading from '../../../../../Components/Loading/Loading';
import { GrValidate } from 'react-icons/gr';
import { TbListDetails, TbTruckDelivery } from "react-icons/tb";
import { TiCancel, TiTick } from "react-icons/ti";
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa6';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const AllOrders = () => {
    const [orders, loading, refetch] = useOrders();
    const [order, setOrder] = useState(null);
    const [copy, setCopy] = useState(null);
    const axiosSecure = useAxiosSecure();

    const openModal = (orderData) => {
        setOrder(orderData);
        document.getElementById('my_modal').showModal();
    };

    const closeModal = () => {
        document.getElementById('my_modal').close();
        setCopy(null);
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopy(text);
            })
    };

    const handleUpdateStatus = (id, updateStatus) => {
        const updatedStatus = {
            orderStatus: updateStatus
        }

        axiosSecure.patch(`http://localhost:5000/order/${id}`, updatedStatus)
            .then(response => {
                if (response.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: "Status successfully updated!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }

    return (
        <div className='m-5'>
            {
                loading
                    ?
                    <div className='flex justify-center items-center'>
                        <Loading />
                    </div>
                    :
                    <div className="overflow-x-auto">
                        <table className="table overflow-x-auto">
                            <thead>
                                <tr className="text-center">
                                    <th className='tect-center'>Sl. No.</th>
                                    <th>Order Items</th>
                                    <th>Order Details</th>
                                    <th>Order Status</th>
                                </tr>
                            </thead>
                            <tbody className="my-3">
                                {
                                    orders.map((order, idx) => <tr
                                        key={order._id}
                                        className="border border-b-black border-t-black text-center"
                                    >
                                        <th className='tect-center'>{idx + 1}</th>
                                        <td>
                                            <div>
                                                {
                                                    order.orderProducts.map(product => (
                                                        <div
                                                            key={product._id}
                                                            className='my-3'
                                                        >
                                                            <p className='font-bold'>{product.productName}</p>
                                                            <div className='flex justify-center items-center'>
                                                                <p>Price {product.price}</p>
                                                                <p className='mx-1'>X</p>
                                                                <p>{product.quantity} {product.quantity > 1 ? 'Pieces' : 'Piece'}</p>
                                                            </div>
                                                        </div>

                                                    ))
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button
                                                    className="w-28 btn mx-auto my-1 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 shadow-lg"
                                                    onClick={() => openModal(order)}
                                                >
                                                    <span className='flex justify-between items-center '>
                                                        Details
                                                        <TbListDetails size={24} className='text-yellow-800 font-extrabold ml-2' />
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                order.orderStatus !== 'pending'
                                                    ?
                                                    <>
                                                        {
                                                            order.orderStatus === 'delivered'
                                                                ?
                                                                <button className="w-28 px-3 py-3 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 rounded-lg shadow-lg cursor-not-allowed">
                                                                    <span className='flex justify-between items-center '>
                                                                        Deliverd<GrValidate size={24} className='text-green-700 font-extrabold ml-2' />
                                                                    </span>
                                                                </button>
                                                                :
                                                                <button className="w-28 px-3 py-3 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 rounded-lg shadow-lg cursor-not-allowed">
                                                                    <span className='flex justify-between items-center '>
                                                                        Canceled<TiCancel size={36} className='text-red-700 font-extrabold ml-2' />
                                                                    </span>
                                                                </button>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <div className='flex flex-col justify-center items-center'>
                                                            <button
                                                                onClick={() => handleUpdateStatus(order._id, "delivered")}
                                                                className="w-28 btn mx-auto my-1 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600">
                                                                <span className='flex justify-between items-center '>
                                                                    Deliver
                                                                    <TbTruckDelivery size={24} className='text-yellow-800 font-extrabold ml-2' />
                                                                </span>
                                                            </button>
                                                            <button
                                                                onClick={() => handleUpdateStatus(order._id, "canceled")}
                                                                className="w-28 btn mx-auto my-1 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600">
                                                                <span className='flex justify-between items-center '>
                                                                    Cancel
                                                                    <TiCancel size={24} className='text-red-600 font-extrabold ml-2' />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </>
                                            }
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>

                        {/* modal */}
                        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className='text-center text-black font-bold'>
                                    <h3 className="text-xl font-bold text-center bg-green-200 my-2 rounded-full">Ordered by</h3>
                                    <p className="text-2xl">{order?.name}</p>
                                    <p className="">✉ {order?.email}</p>
                                    <p className="">☏ {order?.mobile}</p>
                                </div>
                                <div className=''>
                                    <p className='text-xl font-bold text-center bg-green-200 my-2 rounded-full'>Address</p>
                                    <p><span className='font-bold italic'>Home/Road: </span>{order?.deliveryAddress?.address}</p>
                                    {
                                        order?.deliveryAddress?.postCode !== "N/A" && (
                                            <p><span className='font-bold italic'>Post Code: </span>{order?.deliveryAddress?.postCode}</p>
                                        )
                                    }
                                    <p><span className='font-bold italic'>District: </span>{order?.deliveryAddress?.district}</p>
                                </div>
                                <div className=''>
                                    <p className='text-xl font-bold text-center bg-green-200 my-2 rounded-full'>Payment Information</p>
                                    <p><span className='font-bold italic'>Total Payment: </span><span className='font-mono mr-1'>৳</span>{order?.totalCost}/-</p>
                                    <p><span className='font-bold italic'>Payment Via: </span>{(order?.paymentVia) === 'cashOnDelivery' ? 'Cash on Delivery' : 'Online Payment'}</p>
                                    <p><span className='font-bold italic'>Payment status: </span>{(order?.paymentStatus) === 'paid' ? 'Paid' : 'Unpaid'}</p>
                                    {
                                        (order?.transactionId) !== "N/A" && (
                                            <p className='flex justify-start items-center'>
                                                <span className='font-bold italic'>Transaction ID: </span>
                                                <span className='ml-2 rounded-lg'>{order?.transactionId}</span>
                                                <span>
                                                    {
                                                        !copy
                                                            ?
                                                            <FaCopy className='ml-2 cursor-pointer focus:btn' onClick={() => copyToClipboard(order.transactionId)} />
                                                            :
                                                            <TiTick className='ml-2 cursor-pointer focus:btn' onClick={() => copyToClipboard(order.transactionId)} />
                                                    }
                                                </span>
                                            </p>
                                        )
                                    }
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
            }
        </div>
    );
};

export default AllOrders;