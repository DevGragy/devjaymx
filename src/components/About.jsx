import React from "react";
import Me from "../assets/elias1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen text-gray-300 mt-[120px] sm:mt-0"
    >
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full flex justify-center">
          <div className="text-center pb-8 pl-4">
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-red-500">
              ¿Quién soy?
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 mx-auto">
          <div className=" max-w-[250px] md:max-w-[350px] mx-auto">
            <img src={Me} alt="" className="rounded mt-6 " />
          </div>
          <div className="flex flex-col justify-center text-center ">
            <p className="md:text-4xl text-xl font-bold my-8">
              Gusto en conocerte, permíteme contarte acerca de
              mi...
            </p>
            <p className="text-md my-4">
              Soy Ingeniero en Sistemas Computacionales especializado en el
              desarrollo y programación de sitios y aplicaciones web. También me
              dedico a la administración de los sistemas del lado del servidor.
              Además del desarrollo de aplicaciones móviles multiplataforma.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
