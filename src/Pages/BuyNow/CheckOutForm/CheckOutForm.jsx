import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CheckOutForm = ({ orderInformation, price, nameRef, addressRef, districtRef, postCodeRef, phoneRef, emailRef, notesRef, deliveryCharge }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        if (price > 0) {
            const url = "/create-payment-intent";
            axiosSecure
                .post(url, { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!nameRef.current.value || !addressRef.current.value || districtRef.current.value == "Select a District" || !phoneRef.current.value || !emailRef.current.value) {
            toast.error("Opps! Please complete your billing address.");
            return;
        } else if (deliveryCharge === 0) {
            toast.error("Opps! Please, select a delivery charge option.");
            return;
        }

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // console.log('Card', card);

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
        }
    }

    return (
        <div className="mt-5">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <p className="text-xl font-bold">
                    Pay Total <span className="text-green-600"><span className="font-mono mr-1">৳</span>{price}/-</span>
                </p>
                <div className="w-[75%] mt-3 mb-3 border-2 border-green-400 px-8 py-4 rounded-lg">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                </div>
                {
                    cardError && (
                        <p className="text-red-500 text-center font-semibold text-2xl">
                            {cardError}
                        </p>
                    )
                }
                {
                    transactionId && (
                        <p className="text-green-500 text-center font-semibold text-2xl">
                            Transaction Successfull.
                            {/* <br />
                            <span className="text-black">
                                Transaction ID: {transactionId}
                            </span> */}
                        </p>
                    )
                }
                <div>
                    <div className='w-full'>
                        <hr className="border-orange-300 my-4" />
                    </div>
                    <div>
                        <p className="text-center">
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="font-bold hover:link hover:text-blue-600">privacy policy</span>.
                        </p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-10 w-full mx-auto btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex shadow-lg shadow-orange-200"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Proceed to Checkout
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;