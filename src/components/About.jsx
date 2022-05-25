import React from "react";
import Me from '../assets/meThree.jpg'

const About = () => {
  return (
    <section name="about" className="w-full h-screen text-gray-300 mt-[120px] sm:mt-0">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-center">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              Quien soy?
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 mx-auto">
          <div className=' max-w-[350px] mx-auto'>
            <img src={Me} alt="" className="rounded mt-6 " />
          </div>
          <div className="flex flex-col justify-evenly text-center md:text-left">
            <p className="md:text-4xl text-2xl font-bold my-4">
              Hola soy Elias, gusto en conocerte. Permiteme contarte acerca de
              mi.
            </p>
            <p className="text-md my-4">
              Soy Ingeniero en Sistemas Computacionales especializado en el
              desarrollo y programacion de sitios y aplicaciones web. Tambien me
              dedico a la administracion de los sistemas del lado del servidor.
              Ademas del desarrollo de aplicaciones moviles multiplataforma.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
