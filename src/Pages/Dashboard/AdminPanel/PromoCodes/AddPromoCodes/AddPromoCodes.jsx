import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";

function AddPromoCodes() {
    const { handleSubmit, register, control, reset } = useForm();

    const handleAddPromocode = (data) => {
        const { promoCodes, startDate, endDate, discountRate, usageTime, active } = data;
        const newPromoCode = {
            promoCode: promoCodes.toUpperCase(),
            startDate,
            endDate,
            discountRate: parseInt(discountRate),
            usageTime: parseInt(usageTime),
            active
        };

        axios.post('http://localhost:5000/promocodes', newPromoCode)
            .then(data => {
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        icon: "success",
                        title: "New Promocode successfully added!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            });
    };

    return (
        <div className="w-[97%] lg:w-[70%] mx-auto bg-green-50 p-8 my-2 rounded-lg shadow-lg shadow-orange-100">
            <h1 className="text-xl font-bold mb-5 text-center font-serif">Add New Promo Code</h1>
            <form onSubmit={handleSubmit(handleAddPromocode)}>
                <div className="mb-4">
                    <label htmlFor="promoCodes" className="block mb-2 font-bold text-gray-700">
                        Promo Code
                    </label>
                    <input
                        id="promoCodes"
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
                        step="0.01"
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
                        className="btn my-2 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600"
                    >
                        Add Promo Code
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddPromoCodes;
