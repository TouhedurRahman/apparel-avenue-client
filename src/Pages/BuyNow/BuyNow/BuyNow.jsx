import { Parallax } from "react-parallax";
import BuyNowBannerImage from "../../../../src/assets/images/Banner/banner-8.jpg";
import useOrderContext from "../../../Hooks/useOrderContext";

const BuyNow = () => {
    const { orderProductsDetails } = useOrderContext();
    console.log(orderProductsDetails);

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
        </div>
    );
};

export default BuyNow;