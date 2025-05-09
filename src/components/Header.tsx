import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoSHEI from '../components/logo.png'; // Update the path if needed

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 sm:py-4'
      }`}
    >
<div className="container mx-auto px-4 flex justify-between items-center relative">
  {/* Left Side: Logo and Title */}
  <Link to="/" className="z-10 flex items-center space-x-2">
  <img
    src={logoSHEI}
    alt="Logo"
    className="h-8 sm:h-10 md:h-10 lg:h-12 xl:h-14 w-auto"
  />


    <div className="flex flex-col">
      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-[#009fd1] tracking-wide font-sans">
        SUDHARSAN HEAVY ENGINEERING INDUSTRY
      </span>
      <span className="text-[6px] sm:text-[8px] md:text-xs text-gray-500 tracking-wide font-sans">
        Super Group of Companies - Coimbatore
      </span>
    </div>
  </Link>



        {/* Right Side: Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/group"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Group of Companies
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Products
          </NavLink>
          <Link
            to="/contact"
            className="ml-4 bg-[#009fd1] text-white px-4 py-2 rounded hover:bg-[#0080aa] transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-50">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-neutral-900" />
            ) : (
              <Menu className="w-7 h-7 text-neutral-900" />
            )}
          </button>

          {/* Mobile Menu Panel */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 w-64 bg-white border-t shadow-md rounded-b-md py-2 z-40">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                About Us
              </NavLink>
              <NavLink
                to="/group"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Group of Companies
              </NavLink>
              <NavLink
                to="/products"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Products
              </NavLink>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm text-blue-600 hover:bg-gray-100 font-medium"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
