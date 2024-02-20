import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdHeadsetMic } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

const OurSuppurt = () => {
    return (
        <div className="mt-10 px-3 py-2 flex flex-col lg:flex-row justify-between items-center bg-orange-100">
            <div className="w-full flex justify-center items-center">
                <div className="w-[30%] flex justify-center items-center mx-5 font-extrabold">
                    <FaShippingFast className="w-16 h-16" />
                </div>
                <div className="w-[70%] flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold font-serif">Shipping</h1>
                    <p className="text-xl font-bold">COD All Over BD</p>
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
                    <AiFillSafetyCertificate className="w-16 h-16" />
                </div>
                <div className="w-[70%] flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold font-serif">Guarantee</h1>
                    <p className="text-xl font-bold">100% Safe</p>
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