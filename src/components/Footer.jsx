import { Link } from "react-router-dom";

const Footer = () => {
    const scrollHandler = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer>
            <div className="py-8 px-4 max-w-5xl flex flex-col gap-12 sm:flex-row sm:justify-between sm:items-start sm:gap-0 lg:mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-xl font-bold text-blue-600"
                >
                    <p>Rent</p>
                    <i className="bx bxs-map-pin"></i>
                </Link>
                <div className="flex flex-col gap-8">
                    <Link
                        to="/"
                        onClick={() => scrollHandler("hero")}
                        className="w-max font-semibold hover:text-blue-600 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        onClick={() => scrollHandler("about")}
                        className="w-max font-semibold hover:text-blue-600 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/"
                        onClick={() => scrollHandler("rent")}
                        className="w-max font-semibold hover:text-blue-600 transition-colors"
                    >
                        Rent
                    </Link>
                    <Link
                        to="/"
                        onClick={() => scrollHandler("contact")}
                        className="w-max font-semibold hover:text-blue-600 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex gap-8 sm:flex-col">
                    <Link
                        to="https://www.facebook.com/profile.php?id=100094438081140"
                        target="_blank"
                        className="w-max flex items-center gap-4 text-xl font-semibold hover:text-blue-600 transition-colors"
                    >
                        <i className="bx bxl-facebook"></i>
                        <p className="hidden text-sm sm:block">Facebook</p>
                    </Link>
                    <Link
                        to="https://www.instagram.com/ekyzahahah/"
                        target="_blank"
                        className="w-max flex items-center gap-4 text-xl font-semibold hover:text-blue-600 transition-colors"
                    >
                        <i className="bx bxl-instagram"></i>
                        <p className="hidden text-sm sm:block">Instagram</p>
                    </Link>
                    <Link
                        to="https://wa.me/6208819629213"
                        target="_blank"
                        className="w-max flex items-center gap-4 text-xl font-semibold hover:text-blue-600 transition-colors"
                    >
                        <i className="bx bxl-whatsapp"></i>
                        <p className="hidden text-sm sm:block">WhatsApp</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
