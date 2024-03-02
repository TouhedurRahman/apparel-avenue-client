import { createContext, useState } from 'react';

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [orderProductsDetails, setOrderProductsDetails] = useState(null);

    return (
        <OrderContext.Provider value={{ orderProductsDetails, setOrderProductsDetails }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;
