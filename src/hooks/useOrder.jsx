import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

export const useOrder = () => {
    const { orders, setOrders } = useContext(OrderContext);

    const useAddOrder = (item) => {
        const alreadyExistOrder = orders.find(({ id }) => id === item.id);
        if (alreadyExistOrder) {
            return;
        }

        setOrders((prevOrder) => [...prevOrder, item]);
    };

    const useUpdateOrders = (item) => {
        setOrders(item);
    };

    const useRemoveOrder = (itemId) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== itemId));
    };

    const useClearOrder = () => {
        setOrders([]);
    };

    return { orders, useUpdateOrders, useAddOrder, useRemoveOrder, useClearOrder };
};
