import { Parallax } from "react-parallax";
import BuyNowBannerImage from "../../../../src/assets/images/Banner/banner-8.jpg";
import useOrderContext from "../../../Hooks/useOrderContext";
import { useEffect, useRef, useState } from "react";
import useSingleUser from "../../../Hooks/useSingleUser";
import CheckOrders from "../CheckOrders/CheckOrders";
import { useNavigate } from "react-router";
import usePromocodes from "../../../Hooks/usePromocodes";
import { toast } from "react-toastify";
import Loading from "../../../Components/Loading/Loading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { FaCcMastercard } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const BuyNow = () => {
    const [singleUser] = useSingleUser();
    const { orderProductsDetails } = useOrderContext();

    const [promocodes] = usePromocodes();
    const [promoCode, setPromoCode] = useState('');
    const [errorPromoMsg, setErrorPromoMsg] = useState("");
    const [loadingPromo, setLoadingPromo] = useState(false);
    const [discountPrice, setDiscountPrice] = useState(orderProductsDetails?.discountPrice);

    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [deliveryOption, setDeliveryOption] = useState(null);

    const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

    const navigate = useNavigate();

    const bangladeshDistricts = [
        "Bagerhat",
        "Bandarban",
        "Barguna",
        "Barisal",
        "Bhola",
        "Bogra",
        "Brahmanbaria",
        "Chandpur",
        "Chapainawabganj",
        "Chattogram",
        "Chuadanga",
        "Comilla",
        "Cox's Bazar",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Jamalpur",
        "Jessore",
        "Jhalokati",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachhari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lakshmipur",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Munshiganj",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
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

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const handleApplyPromoCode = () => {
        if (promoCode === "") {
            toast.error("Plaease enter your promo code.");
            return;
        }

        setLoadingPromo(true);
        setPromoCode(null);
        setErrorPromoMsg("");

        const foundPromoCode = promocodes.find(
            code =>
                (code.promoCode === promoCode)
                &&
                (code.active === true)
                &&
                (code.usageTime > 0)
        );

        if (foundPromoCode) {
            const discountRate = foundPromoCode.discountRate;

            const discount = ((orderProductsDetails.subTotal) * (discountRate / 100)).toFixed(2);
            setDiscountPrice(discount);

            setLoadingPromo(false);
        } else {
            setLoadingPromo(false);
            setErrorPromoMsg("Inavlid Promo Code");
        }
    };

    const handleDeliveryOptionChange = (option) => {
        setDeliveryOption(option);

        if (option === 'inside-dhaka') {
            setDeliveryCharge(80);
        } else if (option === 'outside-dhaka') {
            setDeliveryCharge(120);
        }
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleCheckoutCOD = () => {
        if (!nameRef.current.value || !addressRef.current.value || districtRef.current.value == "Select a District" || !phoneRef.current.value || !emailRef.current.value) {
            toast.error("Opps! Please complete your billing address.");
            return;
        } else if (deliveryCharge === 0) {
            toast.error("Opps! Please, select a delivery charge option.");
            return;
        }
        console.log("Success.");
    }

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
                {
                    discountPrice === 0
                        ?
                        <div className="w-full mt-10 border-2 border-green-400 rounded-lg p-10">
                            <h1 className="font-serif font-bold mx-2 text-center mb-3">
                                If you have a Promo Code, please apply it below.
                            </h1>
                            <div className="flex flex-col lg:flex-row justify-center items-center mx-2 rounded-lg">
                                <input
                                    type="text"
                                    value={promoCode}
                                    onChange={handlePromoCodeChange}
                                    placeholder="Enter Promo Code"
                                    className="w-full lg:w-1/2 h-11 lg:mr-2 p-2 border-2 border-green-400 rounded-lg text-center focus:outline-none"
                                    required
                                />
                                <button
                                    onClick={handleApplyPromoCode}
                                    className="w-full lg:w-1/2 lg:h-10 lg:mx-auto btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex mt-2 lg:mt-0"
                                >
                                    {
                                        loadingPromo
                                            ?
                                            <div className="flex justify-center items-center">
                                                <Loading />
                                            </div>
                                            :
                                            'Apply'
                                    }
                                </button>
                            </div>
                            {
                                errorPromoMsg &&
                                <>
                                    <p className="text-red-800 text-center font-mono">Invalid or expired promocode.</p>
                                </>
                            }
                        </div>
                        :
                        <div className="w-full mt-10 border-2 border-green-400 rounded-lg p-10">
                            <h1 className="font-serif font-bold mx-2 text-2xl text-center">
                                Promocode successfully applied.
                            </h1>
                        </div>
                }
                <div>
                    <h1 className="text-center text-green-600 text-[120px] font-serif font-extrabold">1.</h1>
                    <h1 className="text-center text-black text-5xl font-serif font-extrabold mb-2">Billing Details</h1>
                    <div className="mx-auto">
                        <div>
                            <label htmlFor="name" className="block text-sm text-black mt-5 font-bold italic">
                                Name<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input ref={nameRef} id="name" name="name" type="text" defaultValue={singleUser.name} required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-sm text-black mt-5 font-bold italic">
                                Country / Region<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input ref={countryRef} id="country" name="country" type="text" required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none cursor-not-allowed" defaultValue="Bangladesh" readOnly />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm text-black mt-5 font-bold italic">
                                City / Village / Road<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input ref={addressRef} id="address" name="address" type="text" required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="district" className="block text-sm text-black mt-5 font-bold italic">
                                District<span className="text-red-600 ml-1">*</span>
                            </label>
                            <select ref={districtRef} id="district" name="district" className="mt-1 p-2 w-full border-2 border-green-400 rounded-md cursor-pointer focus:outline-none">
                                <option value="">Select a District</option>
                                {
                                    bangladeshDistricts.map((district) => (
                                        <option
                                            key={district}
                                            value={district}
                                        >
                                            {district}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="postCode" className="block text-sm text-black mt-5 font-bold italic">
                                Post Code / ZIP (Optional)
                            </label>
                            <input ref={postCodeRef} id="postCode" name="postCode" type="text" className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm text-black mt-5 font-bold italic">
                                Phone<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input ref={phoneRef} id="phone" name="phone" type="tel" defaultValue={singleUser.mobile} required className="mt-1 p-2 w-full border-2 border-green-400 rounded-md focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-black mt-5 font-bold italic">
                                Email<span className="text-red-600 ml-1">*</span>
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
                        {
                            discountPrice !== 0
                            &&
                            <>
                                <div className='w-full'>
                                    <hr className="border-orange-300 my-4" />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center my-3">
                                        <p className="text-xl font-serif font-bold">Discount Price (-)</p>
                                        <p className="text-green-500 text-2xl font-bold font-sans">
                                            <span className="font-mono mr-1">৳</span>{discountPrice}/-
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
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
                                        ((orderProductsDetails?.subTotal + deliveryCharge) - discountPrice).toFixed(2)
                                    }/-
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-green-600 text-[120px] font-serif font-extrabold">3.</h1>
                    <h1 className="text-center text-black text-5xl font-serif font-extrabold mb-2">Payment Information</h1>
                    <div className="p-3 border border-green-400 rounded-lg">
                        <div className="p-4">
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method:</label> */}
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center mb-1">
                                        <input
                                            type="radio"
                                            id="cashOnDelivery"
                                            value="cashOnDelivery"
                                            checked={paymentMethod === 'cashOnDelivery'}
                                            onChange={handlePaymentMethodChange}
                                            className="mr-2 cursor-pointer h-5 w-5"
                                        />
                                        <label htmlFor="cashOnDelivery" className="flex justify-start items-center mr-4 text-xl font-serif font-bold cursor-pointer">
                                            Cash on Delivery <GiPayMoney className="mx-2 text-green-600" />
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center mb-1">
                                        <input
                                            type="radio"
                                            id="onlinePayment"
                                            value="onlinePayment"
                                            checked={paymentMethod === 'onlinePayment'}
                                            onChange={handlePaymentMethodChange}
                                            className="mr-2 cursor-pointer h-5 w-5"
                                        />
                                        <label htmlFor="onlinePayment" className="flex justify-start items-center text-xl font-serif font-bold cursor-pointer">
                                            Online Payment <FaCcMastercard className="mx-2" /><RiVisaFill className="mx-2 text-[#1332C5]" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {
                                paymentMethod === 'cashOnDelivery'
                                    ?
                                    <>
                                        <div className='w-full'>
                                            <hr className="border-orange-300 my-4" />
                                        </div>
                                        <div>
                                            <p className="text-center">
                                                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="font-bold hover:link hover:text-blue-600">privacy policy</span>.
                                            </p>
                                        </div>
                                        <button
                                            className="mt-10 w-full mx-auto btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex shadow-lg shadow-orange-200"
                                            onClick={handleCheckoutCOD}
                                        >
                                            Proceed to Checkout
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Elements stripe={stripePromise}>
                                            <CheckOutForm
                                                orderInformation={orderProductsDetails}
                                                price={((orderProductsDetails?.subTotal + deliveryCharge) - discountPrice)}
                                                nameRef={nameRef}
                                                addressRef={addressRef}
                                                districtRef={districtRef}
                                                phoneRef={phoneRef}
                                                postCodeRef={postCodeRef}
                                                emailRef={emailRef}
                                                notesRef={notesRef}
                                                deliveryCharge={deliveryCharge}
                                            ></CheckOutForm>
                                        </Elements>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;