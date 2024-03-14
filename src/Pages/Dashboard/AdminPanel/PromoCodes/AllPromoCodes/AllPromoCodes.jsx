import { Link } from "react-router-dom";
import PromoCode from "../PromoCode/PromoCode";
import usePromocodes from "../../../../../Hooks/usePromocodes";
import Loading from "../../../../../Components/Loading/Loading";

const AllPromoCodes = () => {
    const [promocodes, loading, refetch] = usePromocodes();

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
                        <h1 className="text-xl font-bold my-5 text-center font-serif">All Promo Code(s)</h1>
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <Link to="/dashboard/add-promocode" className="btn my-2 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600">Add New Promo</Link>
                            <p className="text-xl font-bold text-center font-serif">Total Promo Code(s): {(promocodes.length) < 10 ? `0${promocodes.length}` : `${promocodes.length}`}</p>
                        </div>
                        <div className="mt-5">
                            {
                                promocodes.map((promocode, idx) => <PromoCode
                                    key={promocode._id}
                                    idx={idx}
                                    promocode={promocode}
                                    refetch={refetch}
                                ></PromoCode>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default AllPromoCodes;