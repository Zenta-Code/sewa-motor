const Hero = () => {
    const scrollHandler = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero">
            <div className="py-24 px-4 max-w-5xl lg:mx-auto">
                <div className="mb-8">
                    <p className="font-bold text-blue-600 text-center lg:text-2xl">
                        Embark on the Journey of a Lifetime
                    </p>
                    <h1 className="text-3xl font-bold text-center leading-relaxed lg:text-5xl">
                        Unleash the Explorer Within You
                    </h1>
                </div>
                <p className="mb-16 text-center font-semibold text-slate-500 leading-relaxed">
                    Embark on the journey of a lifetime with Rent. Our
                    motorbikes are not just vehicles; they are the companions to
                    your explorations, telling stories with every mile.
                </p>
                <button
                    type="button"
                    onClick={() => scrollHandler("about")}
                    className="bg-blue-600 rounded-xl mx-auto py-3 px-8 flex items-center gap-4 font-bold text-white hover:cursor-pointer hover:bg-blue-500 transition-colors"
                >
                    Scroll Down <i className="bx bxs-chevrons-down"></i>
                </button>
            </div>
        </section>
    );
};

export default Hero;
