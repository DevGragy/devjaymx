import projectData from "../data/Projects";

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
                        {`Échale un vistazo a algunos de mis proyectos`}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                    {projectData.map((project, idx) => (
                        <div
                            key={idx}
                            style={{ backgroundImage: `url(${project.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
                                <span className="text-xl font-bold text-white tracking-wider ">
                                    {project.name}
                                </span>
                                <div className="pt-8 text-center  ">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                            Ver
                                        </button>
                                    </a>
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                            Código
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Portfolio;
