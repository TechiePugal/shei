import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoSHEI from '../components/logo.png'; // Adjust the path if needed

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo and Company Name */}
        <Link to="/" className="z-10 flex items-center space-x-2">
          <img src={logoSHEI} alt="Logo" className="h-8 w-auto" />
          <span className="hidden md:inline text-xl font-bold text-[#009fd1] leading-tight tracking-wide font-sans">
            SUDHARSHAN HEAVY ENGINEERING INDUSTRY
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
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
          <Link to="/contact" className="btn btn-primary ml-4">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="z-10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-neutral-900" strokeWidth={3.5}/>
            ) : (
              <Menu className="w-7 h-7 text-[#009fd3]" strokeWidth={3.5}/>
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-40">
              <NavLink
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeMenu}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/group"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeMenu}
              >
                Group of Companies
              </NavLink>
              <NavLink
                to="/products"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeMenu}
              >
                Products
              </NavLink>
              <Link
                to="/contact"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 font-medium"
                onClick={closeMenu}
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
