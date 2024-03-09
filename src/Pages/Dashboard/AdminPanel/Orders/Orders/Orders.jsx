import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Orders = () => {
    const [selected, setSelected] = useState('ALL');

    const handleSelection = (selected) => {
        setSelected(selected);
    }

    return (
        <div>
            <div className="m-5">
                <div>
                    <Link
                        to="/dashboard/orders/all-orders"
                        className={`mr-2 px-4 py-2 font-bold italic border-2 border-green-400 shadow-lg shadow-orange-100 rounded-lg  ${selected === "ALL" && 'bg-blue-500 text-white'}`}
                        onClick={() => handleSelection("ALL")}
                    >
                        ALL
                    </Link>
                    <Link
                        className={`mr-2 px-4 py-2 font-bold italic border-2 border-green-400 shadow-lg shadow-orange-100 rounded-lg  ${selected === "PENDING" && 'bg-orange-500 text-white'}`}
                        onClick={() => handleSelection("PENDING")}
                    >
                        Pending
                    </Link>
                    <Link
                        className={`mr-2 px-4 py-2 font-bold italic border-2 border-green-400 shadow-lg shadow-orange-100 rounded-lg  ${selected === "DELIVERED" && 'bg-green-500 text-white'}`}
                        onClick={() => handleSelection("DELIVERED")}
                    >
                        Delivered
                    </Link>
                    <Link
                        className={`mr-2 px-4 py-2 font-bold italic border-2 border-green-400 shadow-lg shadow-orange-100 rounded-lg  ${selected === "CANCELD" && 'bg-red-500 text-white'}`}
                        onClick={() => handleSelection("CANCELD")}
                    >
                        Canceled
                    </Link>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Orders;