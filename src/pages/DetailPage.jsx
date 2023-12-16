import { useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useOrder } from "../hooks/useOrder";
import { motorcycleData } from "../constants/motorcycleData";
import MotorcycleList from "../components/MotorcycleList";

const DetailPage = () => {
    const { id } = useParams();
    const { userId } = useAuth();
    const { useAddOrder } = useOrder();
    const selectedMotorbike = motorcycleData.find(
        (motorbike) => motorbike.id === parseInt(id)
    );
    const { imageUrl, name, specification, description, price } =
        selectedMotorbike;

    return (
        <main>
            <div className="py-8 px-4 max-w-5xl grid grid-cols-1 gap-8 lg:mx-auto">
                <img src={imageUrl} alt="" className="p-4 m-auto" />
                <h1 className="text-2xl font-semibold">{name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td className="w-40 font-semibold">
                                <i className="bx bx-handicap text-blue-600"></i>{" "}
                                Seat
                            </td>
                            <td>: {specification.seat}</td>
                        </tr>
                        <tr>
                            <td className="w-40 font-semibold">
                                <i className="bx bx-transfer-alt text-blue-600"></i>{" "}
                                Transmission
                            </td>
                            <td>: {specification.transmition}</td>
                        </tr>
                        <tr>
                            <td className="w-40 font-semibold">
                                <i className="bx bx-gas-pump text-blue-600"></i>{" "}
                                Fuel
                            </td>
                            <td>: {specification.fuel}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-slate-500 leading-relaxed">{description}</p>
                <p className="text-xl font-semibold">
                    Rp{price.toLocaleString()} / 1day
                </p>
                {userId !== "user_2YkHlkOn4tdf1u5lqBpodIckVwh" && (
                    <button
                        onClick={() => useAddOrder(selectedMotorbike)}
                        className="bg-blue-600 rounded-xl py-3 px-8 max-w-max flex items-center gap-4 font-semibold text-white hover:cursor-pointer hover:bg-blue-500 transition-colors"
                    >
                        Rent now <i className="bx bx-cart-add"></i>
                    </button>
                )}
            </div>
            <MotorcycleList />
        </main>
    );
};

export default DetailPage;
