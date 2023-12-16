import aboutImg from "../assets/images/about.jpg";

const About = () => {
    return (
        <section id="about">
            <div className="py-8 px-4 max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center lg:mx-auto">
                <img src={aboutImg} alt="" className="rounded-2xl" />
                <div>
                    <div className="mb-8">
                        <p className="font-semibold text-blue-600 text-center sm:text-left">
                            About us
                        </p>
                        <h1 className="max-w-xs text-2xl font-bold leading-relaxed text-center sm:text-left">
                            Trusted Motorbike Rental in This City
                        </h1>
                    </div>
                    <p className="text-center leading-relaxed sm:text-left">
                        We are a team of adventure enthusiasts who believe that
                        every journey has its own story. With knowledgeable
                        staff about local destinations and well-maintained
                        bikes, we are ready to help you explore every corner of
                        this city in your own style. Embrace the freedom of
                        travel with Rent.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
