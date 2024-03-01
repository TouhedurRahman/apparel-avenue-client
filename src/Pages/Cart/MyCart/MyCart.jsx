import useMyCart from "../../../Hooks/useMyCart";
import { Link } from "react-router-dom";
import { BsCartXFill } from "react-icons/bs";
import { FaShopify } from "react-icons/fa6";
import CartProductMain from "../CartProductMain/CartProductMain";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../../Components/Loading/Loading";
import usePromocodes from "../../../Hooks/usePromocodes";

const MyCart = () => {
    const [cartProduct, loadingMyCart, refetch] = useMyCart();
    const [promocodes] = usePromocodes();
    const [promoCode, setPromoCode] = useState('');
    const [errorPromoMsg, setErrorPromoMsg] = useState("");
    const [discountPrice, setDiscountPrice] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [deliveryOption, setDeliveryOption] = useState(null);
    const [newCart, setNewCart] = useState([]);

    useEffect(() => {
        setNewCart(
            cartProduct.map(item => {
                return {
                    _id: item._id,
                    productName: item.productName,
                    price: item.price,
                    quantity: item.quantity,
                }
            })
        )
    }, [cartProduct]);

    const totalPrice = newCart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const handleApplyPromoCode = () => {
        if (promoCode === "") {
            toast.error("Plaease enter your promo code.");
            return;
        }

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

            const discount = ((totalPrice) * (discountRate / 100)).toFixed(2);
            setDiscountPrice(discount);

        } else {
            setErrorPromoMsg("Inavlid Promo Code");
        }
    };

    const handleDeliveryOptionChange = (option) => {
        setDeliveryOption(option);

        if (option === 'inside-dhaka') {
            setDeliveryCharge(0 + 80);
        } else if (option === 'outside-dhaka') {
            setDeliveryCharge(0 + 120);
        }
    };

    const handleCheckout = () => {
        if (deliveryCharge === 0) {
            toast.error("Please select delivary charge option.")
            return;
        }
        const orderProductsDetails = {
            OrderItems: newCart,
            subTotal: totalPrice,
            discountPrice: discountPrice,
            deliveryCharge: deliveryCharge,
            TotalCost: ((totalPrice + deliveryCharge) - discountPrice).toFixed(2)
        }
        console.log(orderProductsDetails);
    }

    return (
        <div className='pt-20'>
            {
                loadingMyCart
                    ?
                    <div className="h-48 flex justify-center items-center">
                        <Loading />
                    </div>
                    :
                    <>
                        <div className="mt-10">
                            {
                                cartProduct.length > 0
                                    ?
                                    <div className="flex flex-col lg:flex-row justify-between mx-3">
                                        <div className="lg:w-[75%] m-2">
                                            <div className="flex flex-col">
                                                {
                                                    cartProduct.map((product, idx) => <CartProductMain
                                                        key={product._id}
                                                        product={product}
                                                        idx={idx}
                                                        newCart={newCart}
                                                        setNewCart={setNewCart}
                                                        refetch={refetch}
                                                    ></CartProductMain>)
                                                }
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-[25%] m-2">
                                            <div className="w-full mb-2">
                                                <h1 className="font-serif font-bold mx-2">
                                                    Have Promocode?
                                                </h1>
                                                <div className="flex justify-center items-center mx-2 rounded-lg">
                                                    <input
                                                        type="text"
                                                        value={promoCode}
                                                        onChange={handlePromoCodeChange}
                                                        placeholder="Enter Promo Code"
                                                        className="w-full h-11 mr-2 p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                                                        required
                                                    />
                                                    <button
                                                        onClick={handleApplyPromoCode}
                                                        className="h-10 mx-auto btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                                {
                                                    errorPromoMsg &&
                                                    <>
                                                        <p className="text-red-800 text-center font-mono">Invalid or expired promocode.</p>
                                                    </>
                                                }
                                            </div>
                                            <div className="mx-2 my-3">
                                                <div className="text-center font-extrabold uppercase font-serif border-b-2 border-b-green-400 border-dotted mb-6 p-5 rounded-lg shadow-lg shadow-orange-200">
                                                    Order Summary
                                                </div>
                                                <div>
                                                    <div className="flex justify-between items-center my-3">
                                                        <p>Subtotal </p>
                                                        <p><span className="font-mono mr-1">৳</span>{totalPrice}/-</p>
                                                    </div>
                                                    <div className="flex justify-between items-center my-3">
                                                        <p>Discount (-) </p>
                                                        <p><span className="font-mono mr-1">৳</span>{discountPrice}/-</p>
                                                    </div>
                                                    <div className='w-full'>
                                                        <hr className="border-orange-300 my-4" />
                                                    </div>
                                                    {/* delivery section */}
                                                    <div className="my-3">
                                                        <div className="w-full flex flex-col justify-start items-center">
                                                            <h2 className="w-full text-left">Delivery Charge (+)</h2>
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
                                                    </div>
                                                    <div className='w-full'>
                                                        <hr className="border-orange-300 my-4" />
                                                    </div>

                                                    <div className="flex justify-between items-center my-3">
                                                        <p>Total Payable </p>
                                                        <p className="text-green-500 text-2xl font-bold font-sans">
                                                            <span className="font-mono mr-1">৳</span>{((totalPrice + deliveryCharge) - discountPrice).toFixed(2)}/-
                                                        </p>
                                                    </div>
                                                    <button onClick={handleCheckout} className="mt-10 w-full mx-auto btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex shadow-lg shadow-orange-200"
                                                    >
                                                        Checkout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex flex-col items-center justify-center font-serif font-bold">
                                        <BsCartXFill
                                            size={96}
                                            className="text-gray-400"
                                        />
                                        <h1 className="text-xl my-3">
                                            No product in the cart.
                                        </h1>
                                        <Link
                                            to="/shop-now"
                                            className='btn my-5 bg-white border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600'
                                        >
                                            Return to Shop <FaShopify className="text-2xl" />
                                        </Link>
                                    </div>
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default MyCart;