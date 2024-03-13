import { Link } from "react-router-dom";

const PromoCode = ({ idx, promocode }) => {
    const { _id, promoCode, startDate, endDate, discountRate, usageTime, active, createdAt } = promocode;

    const date = new Date(createdAt);
    const formattedDate = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const formattedString = `${formattedDate}, ${date.toLocaleDateString()}`;

    return (
        <div className="mb-5 bg-white rounded-lg shadow-lg px-3 border-2 border-green-400">
            <div className="flex justify-between items-center border-0 border-b-2 border-b-orange-400 py-3">
                <div className="flex items-center">
                    <p className="w-[50px]">{(idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`}</p>
                    <p className="font-bold font-sans">{promoCode}</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to={`/admindashboard/update-promocode/${_id}`}
                        className="btn m-2 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600"
                    >
                        Edit
                    </Link>
                    {
                        active
                            ?
                            <button className="p-2 bg-green-300 text-orange-800 border-2 border-orange-400 rounded-lg w-[100px]">Active</button>
                            :
                            <button className="p-2 bg-orange-300 text-green-800 border-2 border-green-400 rounded-lg w-[100px]">Deactive</button>
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