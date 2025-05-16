import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = (path) =>
    `text-xl font-semibold border-b-4 border-transparent hover:border-green-400 focus:border-green-400 ${
      location.pathname === path ? 'border-green-400' : ''
    }`;

  return (
    <div className="p-4 relative">
      {/* Hamburger Button */}
      <button
        className="flex flex-col justify-between w-8 h-6"
        onClick={toggleMenu}
      >
        <span className={`block h-1 w-full bg-white rounded transition-transform duration-300 origin-left ${
            isOpen ? 'rotate-[38deg] translate-y-[0.29rem]' : ''}`}></span>
        <span className={`block h-1 w-full bg-white rounded transition-transform duration-300 origin-left ${
            isOpen ? ' opacity-0' : ''}`}></span>
        <span className={`block h-1 w-full bg-white rounded transition-transform duration-300 origin-left ${
            isOpen ? '-rotate-[38deg] translate-y-[0.29rem]' : ''}`}></span>
      </button>

      {/* Navigation Menu */}
      <nav
        id="navMenu"
        className={`
          absolute top-14 right-0 w-max px-4 bg-slate-900 text-white flex flex-col items-center py-4
          ${isOpen ? 'block' : 'hidden'} 
          `}
      >
        <Link to="/" className={linkClass('/')}>
          Home
        </Link>
        <Link to="/#about" className="text-xl font-semibold hover:border-green-400 focus:border-green-400 border-b-4 border-transparent">
          About
        </Link>
        <Link to="/projects" className={linkClass('/projects')}>
          Projects
        </Link>
        <Link to="/contact" className={linkClass('/contact')}>
          Contact
        </Link>
      </nav>
    </div>
  );
}




/* import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <>
      <div className="relative h-7 w-9 flex flex-col justify-between hover:cursor-pointer">
        <div className=" h-1 w-full bg-white rounded-sm"></div>
        <div className=" h-1 w-full bg-white rounded-sm"></div>
        <div className=" h-1 w-full bg-white rounded-sm"></div>
        <div className="absolute bg-black z-10">
          <nav className="hidden c-base:flex justify-center items-center h-full  ">
            <ul className=" flex gap-2 md:gap-5 justify-self-center font-bold font-serif">
              <li>
                <Link
                  to="/"
                  className={`${
                    location.pathname === "/" ? "border-b border-green-400" : ""
                  } custom-base:text-xl`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className=" custom-base:text-xl">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`${
                    location.pathname === "/projects"
                      ? "border-b border-green-400"
                      : ""
                  } custom-base:text-xl`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    location.pathname === "/contact"
                      ? "border-b border-green-400"
                      : ""
                  } custom-base:text-xl`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
 */