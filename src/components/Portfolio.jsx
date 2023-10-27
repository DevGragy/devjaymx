import projectData from "../data/Projects";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const Portfolio = () => {
    return (
        <main
            id="portfolio"
            className="w-full h-full text-gray-300 mt-[120px] sm:mt-0"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-min-[100vh]">
                <div className="pb-8 text-center">
                    <p className="text-3xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-red-500">
                        Mi Trabajo
                    </p>
                    <p className="py-6 text-lg font-medium">
                        {`Mira algunos de mis proyectos`}
                    </p>
                </div>

                <Carousel
                    className="showcase"
                    navButtonsAlwaysVisible={true}
                    animation="slide"
                >
                    {projectData.map((project, i) => (
                        // <CarouselItem
                        //     key={i}
                        //     image={project.image}
                        //     name={project.name}
                        //     preview={project.demo}
                        //     urlToCode={project.code}
                        //     className="showcase__div"
                        // />
                        <div className="grid place-items-center" key={i}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-72 sm:h-full"
                            />
                            <h3 className="my-4 font-bold text-lg">
                                {project.name}
                            </h3>
                            <div className="flex justify-between">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Ver
                                </a>
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Código
                                </a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </main>
    );
};

export default Portfolio;
