import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-10 flex items-center space-x-2">
          {/* Logo Image (Optional) */}
          <img src="src\components\logoSHEI1.png" alt="Logo" className="h-8 w-auto" />

          {/* Company Name - hidden on mobile */}
          <span className="hidden md:inline text-xl font-bold text-[#009fd1] leading-tight tracking-wide font-sans">
            SUDHARASAN HEAVY ENGINEERING INDUSTRY
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
          <Link 
            to="/contact" 
            className="btn btn-primary ml-4"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-neutral-900" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-900" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'font-medium text-primary-600' : 'text-neutral-900'
              }
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'font-medium text-primary-600' : 'text-neutral-900'
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/group"
              className={({ isActive }) =>
                isActive ? 'font-medium text-primary-600' : 'text-neutral-900'
              }
              onClick={closeMenu}
            >
              Group of Companies
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? 'font-medium text-primary-600' : 'text-neutral-900'
              }
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <Link
              to="/contact"
              className="btn btn-primary text-lg"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
