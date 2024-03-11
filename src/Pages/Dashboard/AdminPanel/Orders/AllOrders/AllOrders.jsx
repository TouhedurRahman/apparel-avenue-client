import useOrders from '../../../../../Hooks/useOrders';
import Loading from '../../../../../Components/Loading/Loading';
import { GrValidate } from 'react-icons/gr';
import { TbTruckDelivery } from "react-icons/tb";
import { TiCancel } from "react-icons/ti";

const AllOrders = () => {
    const [orders, loading] = useOrders();

    const handleUpdateStatus = (id, updateStatus) => {
        const data = { updateStatus }
        console.log(data);
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
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <th className='tect-center'>SL</th>
                                    <th>Order Items</th>
                                    <th>Contacts</th>
                                    <th>Delivery Address</th>
                                    <th>Payment Status</th>
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
                                        <td className='w-[300px]'>
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
                                                            {/* <hr /> */}
                                                        </div>

                                                    ))
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <p className='font-bold'>{order.name}</p>
                                            <p>{order.email}</p>
                                            <p>{order.mobile}</p>
                                        </td>
                                        <td>
                                            <p>{order.deliveryAddress.address}</p>
                                            {
                                                order.deliveryAddress.postCode !== "N/A" && (
                                                    <p>Post Code: {order.deliveryAddress.postCode}</p>
                                                )
                                            }
                                            <p>{order.deliveryAddress.district}</p>

                                        </td>
                                        <td>
                                            {
                                                order.paymentVia === "onlinePayment"
                                                    ?
                                                    <>
                                                        <p>Total Payment <span className='font-mono mr-1'>৳</span>{order.totalCost}/-</p>
                                                        <p>Online Payment - Paid</p>
                                                        <p>Transaction Id {order.transactionId}</p>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            order.orderStatus !== 'pending'
                                                                ?
                                                                <>
                                                                    <p>Total Payment <span className='font-mono mr-1'>৳</span>{order.totalCost}/-</p>
                                                                    <p>COD - Paid</p>
                                                                </>
                                                                :
                                                                <>
                                                                    <p>Total Payment <span className='font-mono mr-1'>৳</span>{order.totalCost}/-</p>
                                                                    <p>COD - Unpaid</p>
                                                                </>
                                                        }
                                                    </>
                                            }
                                        </td>
                                        <td>
                                            {
                                                order.orderStatus !== 'pending'
                                                    ?
                                                    <>
                                                        <button className="w-28 px-3 py-3 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 rounded-lg shadow-lg cursor-not-allowed">
                                                            <span className='flex justify-between items-center '>
                                                                Deliverd<GrValidate size={24} className='text-green-700 font-extrabold ml-2' />
                                                            </span>
                                                        </button>
                                                    </>
                                                    :
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
                                                            onClick={() => handleUpdateStatus(order._id, "delivered")}
                                                            className="w-28 btn mx-auto my-1 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600">
                                                            <span className='flex justify-between items-center '>
                                                                Cancel
                                                                <TiCancel size={24} className='text-red-600 font-extrabold ml-2' />
                                                            </span>
                                                        </button>
                                                    </div>
                                            }
                                        </td>
                                        <td>{order.status}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default AllOrders;