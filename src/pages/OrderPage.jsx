import { Fragment, useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useOrder } from "../hooks/useOrder";
import MotorcycleList from "../components/MotorcycleList";
import PaymentMethodModal from "../components/PaymentMethodModal";

const OrderPage = () => {
    const [userOrders, setUserOrders] = useState([]);
    const [rentalDays, setRentalDays] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const { userId } = useAuth();
    const { orders, useUpdateOrders, useRemoveOrder, useClearOrder } =
        useOrder();

    const handleRentalDaysChange = (itemId, value) => {
        setRentalDays((prev) => ({
            ...prev,
            [itemId]: value === "" ? null : parseInt(value, 10),
        }));

        const updatedOrders = orders.map((order) => {
            if (order.id === itemId) {
                return {
                    ...order,
                    rentalDays: value === "" ? null : parseInt(value, 10),
                    orderPrice:
                        order?.price *
                        (value === "" ? null : parseInt(value, 10)),
                };
            }

            return order;
        });

        useUpdateOrders(updatedOrders);
    };

    const calculateItemTotalPrice = (itemId) => {
        const item = orders.find((order) => order.id === itemId);
        const days = rentalDays[itemId] || 1;
        const price = item?.price * days;

        return isNaN(price) ? 0 : price;
    };

    useEffect(() => {
        setUserOrders(
            JSON.parse(localStorage.getItem(`user_orders_${userId}`)) || []
        );
    }, []);

    useEffect(() => {
        const newTotalPrice = orders.reduce(
            (acc, item) => acc + calculateItemTotalPrice(item.id),
            0
        );

        setTotalPrice(newTotalPrice);
    }, [rentalDays, orders]);

    return (
        <main>
            <div className="py-8 px-4 max-w-5xl lg:mx-auto">
                {orders.length === 0 && userOrders.length === 0 ? (
                    <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
                        <p className="text-2xl font-semibold text-center">
                            You haven't ordered anything yet
                        </p>
                    </div>
                ) : userOrders.length > 0 && orders.length === 0 ? (
                    <div className="flex flex-col gap-4">
                        <h1 className="mb-8 text-2xl font-semibold">
                            Rent history
                        </h1>
                        <div className="grid grid-cols-1 gap-4">
                            {userOrders.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="border rounded-2xl p-4 h-max"
                                    >
                                        <div className="mt-4 ml-4 mb-4">
                                            <h1 className="font-semibold">
                                                Card number : {item.cardNumber}
                                            </h1>
                                            <p className="font-semibold">
                                                Total : Rp
                                                {item.totalPrice.toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            {item.orders.map((order, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-4"
                                                    >
                                                        <img
                                                            src={order.imageUrl}
                                                            alt=""
                                                            className="p-4 w-40 h-40"
                                                        />
                                                        <div>
                                                            <h1 className="mb-2 font-semibold">
                                                                {order.name}
                                                            </h1>
                                                            <p className="mb-2 text-sm font-medium text-slate-500">
                                                                {
                                                                    order.rentalDays
                                                                }{" "}
                                                                x Rp
                                                                {order.price.toLocaleString()}
                                                            </p>
                                                            <p className="font-medium">
                                                                Rp
                                                                {order.orderPrice.toLocaleString()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-8 flex justify-between items-center">
                            <h1 className="text-2xl font-semibold">Rent</h1>
                            <p
                                onClick={useClearOrder}
                                className="font-semibold hover:cursor-pointer hover:text-red-600 transition-colors"
                            >
                                Clear
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="h-[calc(100vh-10rem)] flex flex-col gap-4 overflow-y-auto no-scrollbar">
                                {orders.map((item) => (
                                    <div
                                        key={item.id}
                                        className="border p-4 rounded-2xl flex items-center gap-4"
                                    >
                                        <img
                                            src={item.imageUrl}
                                            alt=""
                                            className="p-4 w-40 h-40"
                                        />
                                        <div className="flex flex-col gap-2">
                                            <p>{item.name}</p>
                                            <h1 className="text-sm font-semibold">
                                                Rp{item.price.toLocaleString()}{" "}
                                                / 1day
                                            </h1>
                                            <div
                                                onClick={() =>
                                                    useRemoveOrder(item.id)
                                                }
                                                className="text-xl hover:cursor-pointer hover:text-red-600 transition-colors"
                                            >
                                                <i className="bx bx-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border rounded-2xl p-4 h-max flex flex-col gap-4">
                                <h1 className="font-semibold">Rent summary</h1>
                                <table>
                                    <tbody>
                                        {orders.map((item) => {
                                            return (
                                                <Fragment key={item.id}>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td>
                                                            :
                                                            <span className="ml-4">
                                                                {item.name}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Price</td>
                                                        <td>
                                                            :
                                                            <span className="ml-4">
                                                                {item.price}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rental Days</td>
                                                        <td>
                                                            :
                                                            <span className="ml-4">
                                                                <input
                                                                    type="number"
                                                                    value={
                                                                        rentalDays[
                                                                            item
                                                                                .id
                                                                        ] ===
                                                                        null
                                                                            ? ""
                                                                            : rentalDays[
                                                                                  item
                                                                                      .id
                                                                              ] ||
                                                                              0
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleRentalDaysChange(
                                                                            item.id,
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    className="border rounded-md px-2 w-16"
                                                                />
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Price</td>
                                                        <td>
                                                            :
                                                            <span className="ml-4 font-semibold truncate">
                                                                Rp
                                                                {calculateItemTotalPrice(
                                                                    item.id
                                                                ).toLocaleString()}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pb-4"></td>
                                                    </tr>
                                                </Fragment>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold">Total Price</p>
                                    <p className="font-semibold">
                                        Rp{totalPrice.toLocaleString()}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsPaymentModalOpen(true)}
                                    className="bg-blue-600 rounded-xl py-3 px-8 font-semibold text-white hover:cursor-pointer hover:bg-blue-500 transition-colors"
                                >
                                    Rent
                                </button>
                                {isPaymentModalOpen && (
                                    <PaymentMethodModal
                                        totalPrice={totalPrice}
                                        closePaymentModal={() =>
                                            setIsPaymentModalOpen(false)
                                        }
                                        clearUserOrders={() =>
                                            setRentalDays({})
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <MotorcycleList />
        </main>
    );
};

export default OrderPage;
