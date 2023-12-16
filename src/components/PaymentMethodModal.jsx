import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { useOrder } from "../hooks/useOrder";

const PaymentMethodModal = ({
    totalPrice,
    closePaymentModal,
    clearUserOrders,
}) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [errors, setErrors] = useState({});
    const { orders, useClearOrder } = useOrder();
    const { userId } = useAuth();

    const handlePayNow = (e) => {
        e.preventDefault();

        if (!cardNumber.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                cardNumber: "Card number is required",
            }));
            return;
        }

        if (!expirationDate.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                expirationDate: "Expiration date is required",
            }));
            return;
        }

        if (!cvv.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                cvv: "CVV is required",
            }));
            return;
        }

        const orderData = {
            cardNumber,
            expirationDate,
            cvv,
            orders,
            totalPrice: totalPrice,
        };
        const userOrders =
            JSON.parse(localStorage.getItem(`user_orders_${userId}`)) || [];
        userOrders.push(orderData);
        localStorage.setItem(
            `user_orders_${userId}`,
            JSON.stringify(userOrders)
        );

        useClearOrder();
        closePaymentModal();
        clearUserOrders();
    };

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 p-4 w-full h-full flex items-center justify-center">
            <div className="bg-white rounded-xl p-8">
                <h1 className="mb-4 text-xl font-bold">Payment Information</h1>
                <form className="mb-8">
                    <div className="mb-4">
                        <label
                            htmlFor="cardNumber"
                            className="mb-2 text-sm font-semibold text-gray-700"
                        >
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => {
                                setCardNumber(e.target.value);
                                setErrors((prevErrors) => ({
                                    ...prevErrors,
                                    cardNumber: "",
                                }));
                            }}
                            className={`border rounded-md p-2 w-full ${
                                errors.cardNumber ? "border-red-500" : ""
                            }`}
                            placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && (
                            <p className="text-red-500 text-sm">
                                {errors.cardNumber}
                            </p>
                        )}
                    </div>
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label
                                htmlFor="expirationDate"
                                className="mb-2 text-sm font-semibold text-gray-700"
                            >
                                Expiration Date
                            </label>
                            <input
                                type="text"
                                id="expirationDate"
                                value={expirationDate}
                                onChange={(e) => {
                                    setExpirationDate(e.target.value);
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        expirationDate: "",
                                    }));
                                }}
                                className={`border rounded-md p-2 w-full ${
                                    errors.expirationDate
                                        ? "border-red-500"
                                        : ""
                                }`}
                                placeholder="MM/YYYY"
                            />
                            {errors.expirationDate && (
                                <p className="text-sm text-red-500">
                                    {errors.expirationDate}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="cvv"
                                className="mb-2 text-sm font-semibold text-gray-700"
                            >
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                value={cvv}
                                onChange={(e) => {
                                    setCVV(e.target.value);
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        cvv: "",
                                    }));
                                }}
                                className={`border rounded-md p-2 w-full ${
                                    errors.cvv ? "border-red-500" : ""
                                }`}
                                placeholder="123"
                            />
                            {errors.cvv && (
                                <p className="text-sm text-red-500">
                                    {errors.cvv}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={handlePayNow}
                        className="bg-blue-600 rounded-xl py-3 px-8 gap-4 font-bold text-white hover:cursor-pointer hover:bg-blue-500 transition-colors"
                    >
                        Pay Now
                    </button>
                </form>
                <button
                    type="button"
                    onClick={closePaymentModal}
                    className="font-semibold hover:cursor-pointer hover:text-red-600 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PaymentMethodModal;
