import { Parallax } from "react-parallax";
import BuyNowBannerImage from "../../../../src/assets/images/Banner/banner-8.jpg";
import useOrderContext from "../../../Hooks/useOrderContext";
import { useEffect, useRef, useState } from "react";
import useSingleUser from "../../../Hooks/useSingleUser";
import CheckOrders from "../CheckOrders/CheckOrders";
import { useNavigate } from "react-router";

const BuyNow = () => {
    const [singleUser] = useSingleUser();
    const { orderProductsDetails } = useOrderContext();

    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [deliveryOption, setDeliveryOption] = useState(null);

    const navigate = useNavigate();

    const districts = [
        'Dhaka',
        'Chittagong',
        'Rajshahi',
        'Khulna',
        'Barishal',
        'Sylhet',
        'Rangpur',
        'Mymensingh',
    ];

    const nameRef = useRef(null);
    const countryRef = useRef(null);
    const addressRef = useRef(null);
    const districtRef = useRef(null);
    const postCodeRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const notesRef = useRef(null);

    useEffect(() => {
        if (!orderProductsDetails) {
            navigate('/');
        } else if (orderProductsDetails?.deliveryCharge === 80) {
            setDeliveryOption('inside-dhaka');
            setDeliveryCharge(80);
        } else if (orderProductsDetails?.deliveryCharge === 120) {
            setDeliveryOption('outside-dhaka');
            setDeliveryCharge(120);
        }
        else {
            setDeliveryOption(null);
            setDeliveryCharge(0)
        }
    }, [orderProductsDetails, orderProductsDetails?.deliveryCharge, navigate]);

    const handleDeliveryOptionChange = (option) => {
        setDeliveryOption(option);

        if (option === 'inside-dhaka') {
            setDeliveryCharge(80);
        } else if (option === 'outside-dhaka') {
            setDeliveryCharge(120);
        }
    };

    return (
        <div className="pt-20">
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={BuyNowBannerImage}
                bgImageAlt="Loading..."
                strength={-200}
            >
                <div className="hero h-[200px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-full">
                            <h1 className=" flex flex-col lg:flex-row mb-5 lg:text-5xl font-sans font-extrabold uppercase">
                                <span>SHOPPING CART</span>
                                <span className="mx-3">→</span>
                                <span>CHEC<span className="text-orange-300">KOUT</span></span>
                                <span className="mx-3 text-orange-300">→</span>
                                <span className="underline text-green-300">ORDER COMPLETE</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className="max-w-[75%] lg:max-w-[50%] mx-auto">
                <div>
                    <h1 className="text-center text-green-600 text-[120px] font-serif font-extrabold">1.</h1>
                    <h1 className="text-center text-black text-5xl font-serif font-extrabold mb-2">Billing Details</h1>
                    <div className="mx-auto">
                        <div>
                            <label htmlFor="name" className="block text-sm text-black mt-5 font-bold italic">
                                Name
                            </label>
                            <input ref={nameRef} id="name" name="name" type="text" required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-sm text-black mt-5 font-bold italic">
                                Country/Region
                            </label>
                            <input ref={countryRef} id="country" name="country" type="text" required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none cursor-not-allowed" defaultValue="Bangladesh" readOnly />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm text-black mt-5 font-bold italic">
                                Home Address
                            </label>
                            <input ref={addressRef} id="address" name="address" type="text" required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="district" className="block text-sm text-black mt-5 font-bold italic">
                                District
                            </label>
                            <select ref={districtRef} id="district" name="district" className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none">
                                <option value="">Select a District</option>
                                {districts.map((district) => (
                                    <option key={district} value={district}>
                                        {district}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="postCode" className="block text-sm text-black mt-5 font-bold italic">
                                Post Code/ZIP (Optional)
                            </label>
                            <input ref={postCodeRef} id="postCode" name="postCode" type="text" className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm text-black mt-5 font-bold italic">
                                Phone
                            </label>
                            <input ref={phoneRef} id="phone" name="phone" type="tel" defaultValue={singleUser.mobile} required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-black mt-5 font-bold italic">
                                Email
                            </label>
                            <input ref={emailRef} id="email" name="email" type="email" defaultValue={singleUser.email} required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="notes" className="block text-sm text-black mt-5 font-bold italic">
                                Order Notes (Optional)
                            </label>
                            <textarea ref={notesRef} id="notes" name="notes" placeholder="Notes about your order, e.g. special notes for delivery." rows="3" className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none"></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-green-600 text-[120px] font-serif font-extrabold">2.</h1>
                    <h1 className="text-center text-black text-5xl font-serif font-extrabold mb-2">Check Your Order</h1>
                    <div className="p-3 border border-green-400 rounded-lg">
                        <div>
                            <CheckOrders
                                orderProductsDetails={orderProductsDetails}
                            />
                        </div>
                        <div className='w-full'>
                            <hr className="border-orange-300 my-4" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center my-3">
                                <p className="text-xl font-serif font-bold">Subtotal </p>
                                <p className="text-green-500 text-2xl font-bold font-sans">
                                    <span className="font-mono mr-1">৳</span>{orderProductsDetails?.subTotal.toFixed(2)}/-
                                </p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <hr className="border-orange-300 my-4" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center my-3">
                                <p className="text-xl font-serif font-bold">Discount Price (-)</p>
                                <p className="text-green-500 text-2xl font-bold font-sans">
                                    <span className="font-mono mr-1">৳</span>{orderProductsDetails?.discountPrice.toFixed(2)}/-
                                </p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <hr className="border-orange-300 my-4" />
                        </div>
                        <div className="w-full flex flex-col justify-start items-center">
                            <h2 className="w-full text-xl font-serif font-bold text-left">Delivery Charge (+)</h2>
                            <div className="w-full flex justify-end items-center">
                                <label className="flex justify-end items-center cursor-pointer">
                                    Inside Dhaka <span className="ml-2 text-green-700 font-bold"><span className="font-mono mr-1">৳</span>80/-</span>
                                    <input
                                        type="radio"
                                        name="deliveryOption"
                                        value="inside-dhaka"
                                        checked={deliveryOption === 'inside-dhaka'}
                                        onChange={() => handleDeliveryOptionChange('inside-dhaka')}
                                        className="ml-2 cursor-pointer h-5 w-5"
                                    />
                                </label>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <label className="flex justify-end items-center cursor-pointer">
                                    Outside Dhaka <span className="ml-2 text-green-700 font-bold"><span className="font-mono mr-1">৳</span>120/-</span>
                                    <input
                                        type="radio"
                                        name="deliveryOption"
                                        value="outside-dhaka"
                                        checked={deliveryOption === 'outside-dhaka'}
                                        onChange={() => handleDeliveryOptionChange('outside-dhaka')}
                                        className="ml-2 cursor-pointer h-5 w-5"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <hr className="border-orange-300 my-4" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center my-3">
                                <p className="text-xl font-serif font-bold">Total Payable</p>
                                <p className="text-green-500 text-2xl font-bold font-sans">
                                    <span className="font-mono mr-1">৳</span>
                                    {
                                        ((orderProductsDetails?.subTotal + deliveryCharge) - orderProductsDetails?.discountPrice).toFixed(2)
                                    }/-
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;