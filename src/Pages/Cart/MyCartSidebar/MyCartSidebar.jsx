import { Link } from "react-router-dom";

const MyCartSidebar = () => {
    return (
        <div>
            <Link to="/my-cart">
                View Cart
            </Link>
        </div>
    );
};

export default MyCartSidebar;