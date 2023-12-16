import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section id="contact">
            <div className="py-8 px-4 max-w-5xl lg:mx-auto">
                <div className="py-16">
                    <div className="bg-blue-500 p-2 rounded-2xl">
                        <div className="bg-blue-600 rounded-xl p-8 flex flex-col gap-8">
                            <h1 className="text-2xl font-bold text-white text-center">
                                Contact
                            </h1>
                            <p className="mx-auto max-w-lg text-white text-center leading-relaxed">
                                Feel free to reach out if you require assistance
                                or have inquiries about motorbike rentals. We're
                                happy to assist you!
                            </p>
                            <div className="group bg-blue-600 border-2 rounded-lg mx-auto w-max py-3 px-8 hover:bg-white hover:cursor-pointer transition-colors">
                                <Link
                                    to="https://wa.me/6208819629213"
                                    target="_blank"
                                    className="font-semibold text-white group-hover:text-blue-600 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
