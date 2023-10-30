import techStack from "../data/Technologies";
import TechCard from "./TechCard";

const Skills = () => {
    return (
        <section id="skills" className="w-full h-full text-gray-300 ">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen text-center">
                <div>
                    <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-red-500">
                        Tecnologías
                    </p>
                    <p className="py-4 text-lg font-medium">
                        Éstas son las tecnologías con las que trabajo
                    </p>
                </div>

                {/* Technologies Stack map */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {techStack.map((tech, idx) => (
                        <TechCard
                            key={idx}
                            image={tech.image}
                            name={tech.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
