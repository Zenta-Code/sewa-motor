import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const MotorcycleCard = ({
    id,
    imageUrl,
    name,
    description,
    price,
    onClick,
}) => {
    const { userId } = useAuth();

    return (
        <div className="rounded-2xl shadow-lg flex flex-col gap-4">
            <Link to={`/detail/${id}`}>
                <img src={imageUrl} alt="" className="p-4 w-40 h-40 m-auto" />
            </Link>
            <div className="px-4">
                <Link to={`/detail/${id}`}>
                    <h1 className="font-semibold line-clamp-1">{name}</h1>
                </Link>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>
            <div
                className={`${
                    userId === "user_2YkHlkOn4tdf1u5lqBpodIckVwh" && "pb-4"
                } flex justify-between items-center`}
            >
                <p className="ml-4 text-sm font-semibold">
                    Rp{price.toLocaleString()} / 1day
                </p>
                {userId !== "user_2YkHlkOn4tdf1u5lqBpodIckVwh" && (
                    <div
                        onClick={onClick}
                        className="bg-blue-600 rounded-tl-2xl rounded-br-2xl py-2 px-4 text-lg text-white hover:cursor-pointer hover:bg-blue-500 transition-colors"
                    >
                        <i className="bx bx-cart-add"></i>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MotorcycleCard;
