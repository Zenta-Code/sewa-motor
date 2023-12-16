import { useOrder } from "../hooks/useOrder";
import MotorcycleCard from "./MotorcycleCard";
import { motorcycleData } from "../constants/motorcycleData";

const MotorcycleList = () => {
    const { useAddOrder } = useOrder();

    return (
        <section id="rent">
            <div className="py-8 px-4 max-w-5xl lg:mx-auto">
                <div className="mb-8">
                    <p className="font-semibold text-blue-600 text-center">
                        Our Motorbike Collection
                    </p>
                    <h1 className="text-2xl font-bold leading-relaxed text-center">
                        Diverse Motorbike Options for Every Rider
                    </h1>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {motorcycleData.map((item) => {
                        return (
                            <MotorcycleCard
                                key={item.id}
                                id={item.id}
                                imageUrl={item.imageUrl}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                onClick={() =>
                                    useAddOrder({
                                        ...item,
                                        rentalDays: 0,
                                        orderPrice: 0,
                                    })
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MotorcycleList;
