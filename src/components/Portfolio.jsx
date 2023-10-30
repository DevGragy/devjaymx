import projectData from "../data/Projects";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import './Carousel.css'

const Portfolio = () => {
    return (
        <main
            id="portfolio"
            className="w-full h-full text-gray-300 mt-[120px] sm:mt-0"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
                <div className="pb-8 text-center">
                    <p className="text-3xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-red-500">
                        Mi Trabajo
                    </p>
                    <p className="py-6 text-lg font-medium">
                        Mira algunos de mis proyectos
                    </p>
                </div>

                <Carousel
                    navButtonsAlwaysVisible={true}
                    className="carousel"
                >
                    {projectData.map((project, i) => (
                        <CarouselItem
                            key={i}
                            image={project.image}
                            name={project.name}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))}
                </Carousel>
            </div>
        </main>
    );
};

export default Portfolio;
