import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Helper function to check active state, identical to the main Header logic
  const checkIsActive = (path) => {
    if (path === "/#about") return location.hash === "#about";
    return location.pathname === path && location.hash !== "#about";
  };

  const linkClass = (path) => {
    const isActive = checkIsActive(path);
    return `block px-6 py-3 text-base font-medium transition-all duration-200 border-l-2 ${
      isActive
        ? 'border-blue-500 text-white bg-slate-800/50'
        : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/30 hover:border-slate-600'
    }`;
  };

  return (
    <div className="relative">
      {/* Modern Hamburger / Close Button */}
      <button
        className="relative flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span 
          className={`block h-[2px] w-5 bg-slate-200 rounded-full transition-all duration-300 ease-out ${
            isOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'
          }`}
        ></span>
        <span 
          className={`block h-[2px] w-5 bg-slate-200 rounded-full transition-all duration-300 ease-out absolute ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        ></span>
        <span 
          className={`block h-[2px] w-5 bg-slate-200 rounded-full transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-1'
          }`}
        ></span>
      </button>

      {/* Invisible overlay to close menu when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 h-screen w-screen" 
          onClick={closeMenu}
        ></div>
      )}

      {/* Floating Glassmorphism Navigation Menu */}
      <nav
        className={`absolute top-12 right-0 mt-2 w-48 py-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800/80 shadow-2xl rounded-2xl flex flex-col z-50 transform transition-all duration-300 origin-top-right ${
          isOpen 
            ? 'scale-100 opacity-100 visible translate-y-0' 
            : 'scale-95 opacity-0 invisible -translate-y-2'
        }`}
      >
        <Link to="/" className={linkClass('/')} onClick={closeMenu}>
          Home
        </Link>
        <Link to="/#about" className={linkClass('/#about')} onClick={closeMenu}>
          About
        </Link>
        <Link to="/projects" className={linkClass('/projects')} onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/contact" className={linkClass('/contact')} onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </div>
  );
}