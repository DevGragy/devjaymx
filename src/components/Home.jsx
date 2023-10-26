import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <section id="home" className="w-full h-full">
            <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-screen text-center">
                <h3 className="text-red-500 text-xl pb-1 mt-[72px] sm:mt-16 md:text-2xl">
                    Hola, mi nombre es
                </h3>
                <h1 className="text-3xl sm:text-7xl font-bold text-gray-200 mb-4">
                    Elías García
                </h1>
                <h2 className="text-3xl sm:text-7xl font-bold text-blue-500 mt-4">
                    Fullstack Developer
                </h2>
                <p className="text-white pt-12 pb-8 text-lg sm:text-xl">
                  Soy Ingeniero en Sistemas Computacionales especializado en el desarrollo de sitios y aplicaciones web.
                </p>
                <div className="flex justify-center">
                    <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 text-lg duration-300 ">
                        <a
                            href="#portfolio"
                            className="text-md sm:text-md md:text-lg"
                        >
                            Mira mis trabajos
                        </a>
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-2" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
