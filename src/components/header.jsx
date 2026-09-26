import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HamburgerMenu from "./hamburgerMenu";

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash for scrolling
    if (location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Helper function to determine if a link is active
  const isActive = (path) => {
    if (path === "/#about") return location.hash === "#about";
    return location.pathname === path && location.hash !== "#about";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-extrabold tracking-widest uppercase flex items-center gap-1 z-50"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Roshan
            </span>
            <span className="text-white hidden sm:inline">.Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-1 py-2 text-sm lg:text-base transition-colors duration-300 hover:text-white ${
                      isActive(link.path) ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {link.name}
                    
                    {/* Animated Active Underline */}
                    {isActive(link.path) && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation (Hamburger) */}
          <div className="flex items-center md:hidden z-50">
            <HamburgerMenu />
          </div>
          
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

/* import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HamburgerMenu from "./hamburgerMenu";

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash for scrolling
    if (location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <header className="sticky bg-slate-900 h-14 w-full min-w-[250px] top-0 right-0 left-0 overflow-visible z-50 text-white">
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
        <div className="relative flex h-full items-center justify-center c-base:hidden">
          <h1 className=" font-black tracking-wider ">PortFolio</h1>
          <div className=" absolute right-2">
            <HamburgerMenu />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
 */