import { useForm } from "react-hook-form";

const AddNewProducts = () => {
    const { handleSubmit, register, reset } = useForm();

    const handleAddProduct = () => {

    }

    return (
        <div className="w-[97%] lg:w-[70%] mx-auto bg-green-50 p-8 my-2 rounded-lg shadow-lg shadow-orange-100">
            <h1 className="text-xl font-bold mb-5 text-center font-serif">Add New Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image Upload
                    </label>
                    <input
                        className="file-input file-input-bordered file-input-success w-full"
                        type="file"
                        {...register("image", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="text"
                        {...register("productName", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Gender
                    </label>
                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="w-5 h-5 form-radio border-green-400 rounded-lg cursor-pointer focus:outline-none focus:border-orange-400"
                                value="male"
                                {...register("gender", { required: true })}
                            />
                            <span className="ml-2 cursor-pointer">Male</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                type="radio"
                                className="w-5 h-5 form-radio border-green-400 rounded-lg cursor-pointer focus:outline-none focus:border-orange-400"
                                value="female"
                                {...register("gender", { required: true })}
                            />
                            <span className="ml-2 cursor-pointer">Female</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Category
                    </label>
                    <input
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="text"
                        {...register("category", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Price (Before Discount)
                    </label>
                    <input
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="number"
                        step="0"
                        {...register("price", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Rate (%)
                    </label>
                    <input
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="number"
                        step="0"
                        {...register("discountRate", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Sizes & Quantity
                    </label>
                    <div className="grid grid-cols-2 gap-2 lg:flex flex-col lg:flex-row justify-between items-center">
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2 lg:mt-0">
                            M
                        </label>
                        <input
                            className="w-[80px] px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                            type="number"
                            step="0"
                            {...register("m", { required: true })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2 lg:mt-0">
                            L
                        </label>
                        <input
                            className="w-[80px] px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                            type="number"
                            step="0"
                            {...register("l", { required: true })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2 lg:mt-0">
                            XL
                        </label>
                        <input
                            className="w-[80px] px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                            type="number"
                            step="0"
                            {...register("xl", { required: true })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2 lg:mt-0">
                            XXL
                        </label>
                        <input
                            className="w-[80px] px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                            type="number"
                            step="0"
                            {...register("xxl", { required: true })}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Description
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-orange-400"
                        type="text"
                        {...register("description", { required: true })}
                    />
                </div>

                <div className="flex items-center justify-center rounded-lg">
                    <button
                        type="submit"
                        className="btn my-2 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewProducts;