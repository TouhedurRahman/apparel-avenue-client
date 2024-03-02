import { useContext } from "react";
import { OrderContext } from "../Context/OrderProvider/OrderProvider";

const useOrderContext = () => {
    const order = useContext(OrderContext);
    return order;
};

export default useOrderContext;