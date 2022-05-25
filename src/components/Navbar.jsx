import { useState } from "react";
import { FaBars, FaTimes, FaDev, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import CV from "../assets/CV.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300 ">
      <div>
        <div className="flex items-center text-4xl font-semibold text-red-600 cursor-pointer">
          <FaDev className="text-6xl " />
          <span className="text-white">JayMx</span>
        </div>
      </div>

      <ul className="hidden md:flex">
        <li className="hover:text-red-500 duration-200">
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="hover:text-red-500 duration-200">
          <Link to="about" smooth={true} duration={500}>
            Quien Soy
          </Link>
        </li>
        <li className="hover:text-red-500 duration-200">
          <Link to="portfolio" smooth={true} duration={500}>
            Mi Trabajo
          </Link>
        </li>
        <li className="hover:text-red-500 duration-200">
          <Link to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li className="hover:text-red-500 duration-200">
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden cursor-pointer z-10 hover:text-red-500 duration-200"
      >
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-red-500 duration-200">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-red-500 duration-200">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Quien Soy
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-red-500 duration-200">
          <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
            Mi Trabajo
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-red-500 duration-200">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-red-500 duration-200">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jhonatan-elias-garc%C3%ADa-ortega-3517271a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/DevGragy"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:devjaymx@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Correo
              <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              C.V.
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
