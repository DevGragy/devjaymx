import techStack from "../data/Technologies";

const Skills = () => {
  return (
    <section id="skills" className="w-full h-full text-gray-300 mt-[240px] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen text-center">
        <div>
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-red-500">
            Tecnologías
          </p>
          <p className="py-4 text-lg font-medium">
          {`Éstas son las tecnologías con las que trabajo`}
          </p>
        </div>

        {/* Technologies Stack map */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img src={tech.image} alt={tech.name} className="w-20 mx-auto" />
              <p className="my-4">{tech.name}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills;
