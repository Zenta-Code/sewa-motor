import { useState } from "react";

const MotorcycleManagementPage = () => {
    const [motorImage, setMotorImage] = useState("");
    const [motorName, setMotorName] = useState("");
    const [motorSpecification, setMotorSpecification] = useState({
        seat: "",
        transmition: "",
        fuel: "",
    });
    const [motorDescription, setMotorDescription] = useState("");
    const [motorPrice, setMotorPrice] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi input di sini
        const validationErrors = {};
        if (!motorImage.trim()) {
            validationErrors.motorImage = "Motor image is required";
        }
        if (!motorName.trim()) {
            validationErrors.motorName = "Motor name is required";
        }
        if (!motorSpecification.seat.trim()) {
            validationErrors.motorSeat = "Motor seat is required";
        }
        if (!motorSpecification.transmition.trim()) {
            validationErrors.motorTransmition = "Motor transmition is required";
        }
        if (!motorSpecification.fuel.trim()) {
            validationErrors.motorFuel = "Motor fuel is required";
        }
        if (!motorDescription.trim()) {
            validationErrors.motorDescription = "Motor description is required";
        }
        if (!motorPrice.trim()) {
            validationErrors.motorPrice = "Motor price is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Jika validasi sukses, kirim data ke fungsi onSubmit
        console.log({
            imageUrl: motorImage,
            name: motorName,
            specification: motorSpecification,
            description: motorDescription,
            price: motorPrice,
        });

        // Reset form setelah submit
        setMotorImage("");
        setMotorName("");
        setMotorSpecification({ seat: "", transmition: "", fuel: "" });
        setMotorDescription("");
        setMotorPrice("");
        setErrors({});
    };

    return (
        <main>
            <form className="py-8 px-4 max-w-5xl grid grid-cols-1 gap-8 lg:mx-auto">
                <div className="mb-4">
                    <label
                        htmlFor="motorImage"
                        className="mb-2 text-sm font-semibold text-gray-700"
                    >
                        Motor Image
                    </label>
                    <input
                        type="text"
                        id="motorImage"
                        value={motorImage}
                        onChange={(e) => {
                            setMotorImage(e.target.value);
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                motorImage: "",
                            }));
                        }}
                        className={`border rounded-md p-2 w-full ${
                            errors.motorImage ? "border-red-500" : ""
                        }`}
                        placeholder="Enter motor image URL"
                    />
                    {errors.motorImage && (
                        <p className="text-red-500 text-sm">
                            {errors.motorImage}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="motorName"
                        className="mb-2 text-sm font-semibold text-gray-700"
                    >
                        Motor Name
                    </label>
                    <input
                        type="text"
                        id="motorName"
                        value={motorName}
                        onChange={(e) => {
                            setMotorName(e.target.value);
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                motorName: "",
                            }));
                        }}
                        className={`border rounded-md p-2 w-full ${
                            errors.motorName ? "border-red-500" : ""
                        }`}
                        placeholder="Enter motor name"
                    />
                    {errors.motorName && (
                        <p className="text-red-500 text-sm">
                            {errors.motorName}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="motorSeat"
                        className="mb-2 text-sm font-semibold text-gray-700"
                    >
                        Motor Seat
                    </label>
                    <input
                        type="text"
                        id="motorSeat"
                        value={motorSpecification.seat}
                        onChange={(e) => {
                            setMotorSpecification((prevSpec) => ({
                                ...prevSpec,
                                seat: e.target.value,
                            }));
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                motorSeat: "",
                            }));
                        }}
                        className={`border rounded-md p-2 w-full ${
                            errors.motorSeat ? "border-red-500" : ""
                        }`}
                        placeholder="Enter motor seat"
                    />
                    {errors.motorSeat && (
                        <p className="text-red-500 text-sm">
                            {errors.motorSeat}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="motorTransmition"
                        className="mb-2 text-sm font-semibold text-gray-700"
                    >
                        Motor Transmition
                    </label>
                    <input
                        type="text"
                        id="motorTransmition"
                        value={motorSpecification.transmition}
                        onChange={(e) => {
                            setMotorSpecification((prevSpec) => ({
                                ...prevSpec,
                                transmition: e.target.value,
                            }));
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                motorTransmition: "",
                            }));
                        }}
                        className={`border rounded-md p-2 w-full ${
                            errors.motorTransmition ? "border-red-500" : ""
                        }`}
                        placeholder="Enter motor transmition"
                    />
                    {errors.motorTransmition && (
                        <p className="text-red-500 text-sm">
                            {errors.motorTransmition}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="motorFuel"
                        className="mb-2 text-sm font-semibold text-gray-700"
                    >
                        Motor Fuel
                    </label>
                    <input
                        type="text"
                        id="motorFuel"
                        value={motorSpecification.fuel}
                        onChange={(e) => {
                            setMotorSpecification((prevSpec) => ({
                                ...prevSpec,
                                fuel: e.target.value,
                            }));
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                motorFuel: "",
                            }));
                        }}
                        className={`border rounded-md p-2 w-full ${
                            errors.motorFuel ? "border-red-500" : ""
                        }`}
                        placeholder="Enter motor fuel"
                    />
                    {errors.motorFuel && (
                        <p className="text-red-500 text-sm">
                            {errors.motorFuel}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="motorDescription"
                        className="mb-2 text-sm font-semibold text-gray-700"
                    >
                        Motor Description
                    </label>
                    <textarea
                        id="motorDescription"
                        value={motorDescription}
                        onChange={(e) => {
                            setMotorDescription(e.target.value);
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                motorDescription: "",
                            }));
                        }}
                        className={`border rounded-md p-2 w-full ${
                            errors.motorDescription ? "border-red-500" : ""
                        }`}
                        placeholder="Enter motor description"
                    />
                    {errors.motorDescription && (
                        <p className="text-red-500 text-sm">
                            {errors.motorDescription}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="motorPrice"
                        className="mb-2 text-sm font-semibold text-gray-700"
                    >
                        Motor Price
                    </label>
                    <input
                        type="text"
                        id="motorPrice"
                        value={motorPrice}
                        onChange={(e) => {
                            setMotorPrice(e.target.value);
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                motorPrice: "",
                            }));
                        }}
                        className={`border rounded-md p-2 w-full ${
                            errors.motorPrice ? "border-red-500" : ""
                        }`}
                        placeholder="Enter motor price"
                    />
                    {errors.motorPrice && (
                        <p className="text-red-500 text-sm">
                            {errors.motorPrice}
                        </p>
                    )}
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-600 rounded-xl py-3 px-8 font-bold text-white hover:cursor-pointer hover:bg-blue-500 transition-colors"
                    >
                        Add Motor
                    </button>
                    <button
                        type="button"
                        onClick={() => {}}
                        className="bg-gray-400 rounded-xl py-3 px-8 font-bold text-white hover:cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </main>
    );
};

export default MotorcycleManagementPage;
