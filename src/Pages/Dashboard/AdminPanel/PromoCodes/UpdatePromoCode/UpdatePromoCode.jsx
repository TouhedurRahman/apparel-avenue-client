import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const UpdatePromoCode = () => {
    const { handleSubmit, register, control, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: promo = {} } = useQuery({
        queryKey: ['promo', id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/promocode/${id}`);
            return data;
        },
    });

    const handleUpdatePromocode = (data) => {
        const { startDate, endDate, discountRate, usageTime, active } = data;
        const updatedPromo = {
            startDate,
            endDate,
            discountRate: parseInt(discountRate),
            usageTime: parseInt(usageTime),
            active
        };

        axiosSecure.patch(`http://localhost:5000/promocode/${promo._id}`, updatedPromo)
            .then(response => {
                if (response.data.modifiedCount) {
                    reset();
                    navigate("/dashboard/all-promocodes");
                    Swal.fire({
                        icon: "success",
                        title: "Promo Code successfully updated!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }

    return (
        <div className="w-[97%] lg:w-[70%] mx-auto bg-green-50 p-8 my-2 rounded-lg shadow-lg shadow-orange-100">
            <h1 className="text-xl font-bold mb-5 text-center font-serif">Update Promo Code</h1>
            <form onSubmit={handleSubmit(handleUpdatePromocode)}>
                <div className="mb-4">
                    <label htmlFor="promoCodes" className="block mb-2 font-bold text-gray-700">
                        Promo Codes
                    </label>
                    <input
                        id="promoCodes"
                        defaultValue={promo?.promoCode}
                        readOnly
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="text"
                        {...register("promoCodes", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="startDate" className="block mb-2 font-bold text-gray-700">
                        Start Date
                    </label>
                    <input
                        type="date"
                        defaultValue={promo.startDate}
                        {...register("startDate", { required: true })}
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="endDate" className="block mb-2 font-bold text-gray-700">
                        End Date
                    </label>
                    <input
                        type="date"
                        defaultValue={promo.endDate}
                        {...register("endDate", { required: true })}
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="discountRate" className="block mb-2 font-bold text-gray-700">
                        Discount Rate (%)
                    </label>
                    <input
                        id="discountRate"
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="number"
                        defaultValue={promo.discountRate}
                        step="0"
                        {...register("discountRate", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="usageTime" className="block mb-2 font-bold text-gray-700">
                        Use Time
                    </label>
                    <input
                        id="usageTime"
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="text"
                        defaultValue={promo.usageTime}
                        {...register("usageTime", { required: true })}
                    />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="active" className="block mb-2 font-bold text-gray-700">
                        Active?
                    </label>
                    <div className="flex items-center">
                        <Controller
                            control={control}
                            name="active"
                            defaultValue={false}
                            render={({ field }) => (
                                <>
                                    <input
                                        type="checkbox"
                                        id="active"
                                        className="hidden"
                                        {...field}
                                    />
                                    <label
                                        htmlFor="active"
                                        className={`cursor-pointer w-12 h-6 rounded-full ${field.value ? 'bg-green-500' : 'bg-red-500'
                                            }`}
                                    >
                                        <span className={`block w-6 h-6 rounded-full bg-white shadow-md transform ${field.value ? 'translate-x-6' : ''}`}></span>
                                    </label>
                                </>
                            )}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="btn my-2 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-60"
                    >
                        Update Promo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePromoCode;