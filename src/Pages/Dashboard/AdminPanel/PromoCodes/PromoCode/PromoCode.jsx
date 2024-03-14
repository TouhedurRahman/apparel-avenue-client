import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const PromoCode = ({ idx, promocode, refetch }) => {
    const { _id, promoCode, startDate, endDate, discountRate, usageTime, active, createdAt } = promocode;
    const axiosSecure = useAxiosSecure();

    const date = new Date(createdAt);
    const formattedDate = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const formattedString = `${formattedDate}, ${date.toLocaleDateString()}`;

    const handleDelete = (id, promo) => {
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
                axiosSecure.delete(`http://localhost:5000/promocode/${id}`)
                    .then(response => {
                        if (response.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Promo ${promo} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mb-5 bg-white rounded-lg shadow-lg px-3 border-2 border-green-400">
            <div className="flex justify-between items-center border-0 border-b-2 border-b-orange-400 py-3">
                <div className="flex items-center">
                    <p className="w-[50px]">{(idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`}</p>
                    <p className="font-bold font-sans">{promoCode}</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to={`/dashboard/update-promocode/${_id}`}
                    >
                        <FaEdit className="text-2xl text-yellow-700 mx-2 cursor-pointer" />
                    </Link>
                    <FaTrashAlt
                        onClick={() => handleDelete(_id, promoCode)}
                        className="text-2xl text-red-500 mx-2 cursor-pointer"
                    />
                    {
                        active
                            ?
                            <button className="p-2 bg-green-300 text-orange-800 border-2 border-orange-400 rounded-lg w-[100px] ml-1">Active</button>
                            :
                            <button className="p-2 bg-orange-300 text-green-800 border-2 border-green-400 rounded-lg w-[100px] ml-1">Deactive</button>
                    }
                </div>
            </div>
            <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center py-3">
                <p><span className="font-bold italic">Created at: </span>{formattedString}</p>
                <p><span className="font-bold italic">Usages: </span>{usageTime}</p>
                <p><span className="font-bold italic">Discount Rate: </span>{discountRate}%</p>
                <p><span className="font-bold italic">Start Date: </span>{startDate}</p>
                <p><span className="font-bold italic">End date: </span>{endDate}</p>
            </div>
        </div>
    );
};

export default PromoCode;