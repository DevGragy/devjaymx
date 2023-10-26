import { FaBars, FaTimes, FaDev, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import CV from "../assets/CV.pdf";

const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center px-4 bg-slate-900 text-gray-300 text-center">
      <div>
        <div>
          <ul className="flex justify-center my-6">
            <li className="">
              <a
                className="flex justify-between items-center w-full text-gray-300 "
                href="https://www.linkedin.com/in/jhonatan-elias-garc%C3%ADa-ortega-3517271a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>

            <li className="">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/DevGragy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>

            <li className="">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:devjaymx@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineMail size={30} />
              </a>
            </li>

            <li className="">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
        <p className="my-6"> © DevJayMx | Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
