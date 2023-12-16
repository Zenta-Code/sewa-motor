import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, UserButton, SignIn } from "@clerk/clerk-react";
import { useOrder } from "../hooks/useOrder";

const NavigationBar = () => {
    const [isShow, setIsShow] = useState(false);
    const [isShowSignIn, setIsShowSignIn] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const { userId } = useAuth();
    const { orders } = useOrder();

    console.log(userId);

    const scrollHandler = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }

        setIsShow(false);
    };

    useEffect(() => {
        const resizeHandler = () => {
            setWidth(window.innerWidth);
        };

        const navgationBarHideHandler = () => {
            if (window.scrollY > 0) {
                setIsShow(false);
            }
        };

        window.addEventListener("resize", resizeHandler);
        window.addEventListener("scroll", navgationBarHideHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("scroll", navgationBarHideHandler);
        };
    }, []);

    return (
        <header className="shadow-sm">
            <nav className="p-4 max-w-screen-lg flex justify-between items-center lg:mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-xl font-bold text-blue-600"
                >
                    Rent
                    <i className="bx bxs-map-pin"></i>
                </Link>
                <div
                    className={`fixed top-[3.75rem] left-0 bg-white rounded-bl-2xl rounded-br-2xl shadow-lg py-8 px-4 w-full ${
                        !isShow && width < 640 ? "hidden gap-4" : "flex gap-8"
                    } flex-col sm:static sm:shadow-none sm:p-0 sm:w-max sm:flex-row`}
                >
                    <Link
                        to="/"
                        onClick={() => scrollHandler("hero")}
                        className="font-semibold hover:text-blue-600 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        onClick={() => scrollHandler("about")}
                        className="font-semibold hover:text-blue-600 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/"
                        onClick={() => scrollHandler("rent")}
                        className="font-semibold hover:text-blue-600 transition-colors"
                    >
                        Rent
                    </Link>
                    <Link
                        to="/"
                        onClick={() => scrollHandler("contact")}
                        className="font-semibold hover:text-blue-600 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    {userId !== "user_2YkHlkOn4tdf1u5lqBpodIckVwh" ? (
                        <Link
                            to="/order"
                            className="relative text-2xl hover:cursor-pointer"
                        >
                            <i className="bx bx-cart"></i>
                            {orders.length !== 0 && (
                                <div className="absolute top-0 right-[-0.5rem] bg-blue-600 rounded-full w-4 h-4 flex justify-center items-center text-[0.5rem] text-white">
                                    {orders.length}
                                </div>
                            )}
                        </Link>
                    ) : (
                        <Link
                            to="/motor-manage"
                            className="relative text-2xl hover:cursor-pointer"
                        >
                            <i className="bx bx-edit"></i>
                            {orders.length !== 0 && (
                                <div className="absolute top-0 right-[-0.5rem] bg-blue-600 rounded-full w-4 h-4 flex justify-center items-center text-[0.5rem] text-white">
                                    {orders.length}
                                </div>
                            )}
                        </Link>
                    )}
                    {userId ? (
                        <UserButton />
                    ) : (
                        <button
                            onClick={() => setIsShowSignIn(!isShowSignIn)}
                            className="bg-blue-600 rounded-xl mx-auto py-2 px-8 font-bold text-white hover:cursor-pointer hover:bg-blue-500 transition-colors"
                        >
                            Sign In
                        </button>
                    )}
                    {isShowSignIn && (
                        <div className="fixed top-0 left-0 bg-black bg-opacity-50 p-4 w-full h-full flex items-center justify-center">
                            <div
                                onClick={() => setIsShowSignIn(!isShowSignIn)}
                                className="fixed top-4 right-4 text-3xl text-white hover:cursor-pointer"
                            >
                                <i className="bx bx-x"></i>
                            </div>
                            <SignIn />
                        </div>
                    )}
                    <div
                        onClick={() => setIsShow(!isShow)}
                        className="text-2xl hover:cursor-pointer sm:hidden"
                    >
                        <i className="bx bx-grid-alt"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;
