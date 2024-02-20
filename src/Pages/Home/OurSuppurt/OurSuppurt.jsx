import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdHeadsetMic } from "react-icons/md";

const OurSuppurt = () => {
    return (
        <div className="mt-10 px-3 py-2 flex flex-col lg:flex-row justify-between items-center bg-orange-100">
            <div className="w-full flex justify-center items-center">
                <div className="w-[30%] flex justify-center items-center mx-5 font-extrabold">
                    <FaShippingFast className="w-16 h-16" />
                </div>
                <div className="w-[70%] flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold font-serif">Shipping</h1>
                    <p className="text-xl font-bold">COD all over Bangladesh</p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-[30%] flex justify-center items-center mx-5 font-extrabold">
                    <MdHeadsetMic className="w-16 h-16" />
                </div>
                <div className="w-[70%] flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold font-serif">Support</h1>
                    <p className="text-xl font-bold">24/7 Help Desk</p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-[30%] flex justify-center items-center mx-5 font-extrabold">
                    <RiSecurePaymentLine className="w-16 h-16" />
                </div>
                <div className="w-[70%] flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold font-serif">Payment</h1>
                    <p className="text-xl font-bold">Secure Online Payment</p>
                </div>
            </div>
        </div>
    );
};

export default OurSuppurt;