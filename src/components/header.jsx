import { Link, Outlet } from "react-router-dom";
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
