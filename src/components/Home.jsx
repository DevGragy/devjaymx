import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h3 className="text-red-500 text-xl pb-4">Hola, mi nombre es</h3>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Elias Garcia
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Soy Desarrollador Web
        </h2>
        <p className="text-[#8892b0] pt-12 pb-8 text-xl">
          Me dedico al desarrollo de sitios web utilizando tecnologias modernas
          para crear paginas de calidad en donde mis clientes encuentran justo
          lo que necesitan para hacer crecer sus negocios.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 text-lg duration-300">
          <Link to="portfolio" smooth={true} duration={500}>
            Mira mis trabajos
          </Link>
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
