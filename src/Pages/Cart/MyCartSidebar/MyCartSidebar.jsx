import { Link } from "react-router-dom";
import useMyCart from "../../../Hooks/useMyCart";
import { BsCartXFill } from "react-icons/bs";
import { FaCartArrowDown, FaShopify } from "react-icons/fa6";

const MyCartSidebar = () => {
    const [cartProduct] = useMyCart();
    return (
        <div className="mr-2">
            {
                cartProduct.length > 0
                    ?
                    <div className="flex flex-col items-center justify-center">
                        <Link
                            to="/my-cart"
                            reloadDocument={true}
                            className='btn my-5 bg-white border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600'
                        >
                            View Cart <FaCartArrowDown className="text-2xl" />
                        </Link>
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center">
                        <BsCartXFill
                            size={96}
                            className="text-gray-400"

                        />
                        <h1 className="text-xl my-3">
                            No product in the cart.
                        </h1>
                        <Link
                            to="/shop-now"
                            reloadDocument={true}
                            className='btn my-5 bg-white border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600'
                        >
                            Return to Shop <FaShopify className="text-2xl" />
                        </Link>
                    </div>
            }
        </div>
    );
};

export default MyCartSidebar;