import { createContext, useState } from "react";

export const OrderContext = createContext(null);

export const OrderContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    return <OrderContext.Provider value={{ orders, setOrders }}>{children}</OrderContext.Provider>;
};
