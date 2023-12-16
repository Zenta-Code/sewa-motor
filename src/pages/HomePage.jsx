import Hero from "../components/Hero";
import About from "../components/About";
import MotorcycleList from "../components/MotorcycleList";
import Contact from "../components/Contact";

const HomePage = () => {
    return (
        <main>
            <Hero />
            <About />
            <MotorcycleList />
            <Contact />
        </main>
    );
};

export default HomePage;
