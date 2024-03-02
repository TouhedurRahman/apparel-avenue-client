const CheckOrders = ({ orderProductsDetails }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-black font-bold italic text-center border-b-2 border-b-green-400 rounded-lg">
                            <th>Image</th>
                            <th className="text-left">Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th></th>
                            <th>Quantity</th>
                            <th className="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderProductsDetails?.orderItems?.map(item =>
                                <tr
                                    key={item._id}
                                    className="text-center"
                                >
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded">
                                                <img src={item.imageURL} alt="Loading..." />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left font-bold">{item.productName}</td>
                                    <td>{item.size}</td>
                                    <td>{item.price}</td>
                                    <td><span className="font-mono">X</span></td>
                                    <td>{item.quantity}</td>
                                    <td className="text-right"><span className="mr-1 font-mono">৳</span>{(item.price) * (item.quantity)}/-</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOrders;