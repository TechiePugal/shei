import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoSHEI from '../components/logo.png'; // Update path if needed

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
        {/* Logo and Title */}
        <Link to="/" className="z-10 flex items-center space-x-2">
          <img
            src={logoSHEI}
            alt="Logo"
            className="h-8 sm:h-10 md:h-10 lg:h-12 xl:h-14 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-[14px] sm:text-[16px] md:text-sm lg:text-[14px] xl:text-[16px] font-black text-[#009fd1] tracking-wide font-sans">
              SUDHARSAN HEAVY ENGINEERING INDUSTRY
            </span>
            <span
              className={`text-[8px] sm:text-[10px] md:text-sm tracking-wide font-sans transition-colors duration-300 ${
                scrolled ? 'text-gray-1000' : 'text-gray-200'
              }`}
            >
              (A Unit of Super Group Companies, Coimbatore)
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {[
            { to: '/', label: 'Home', exact: true },
            { to: '/about', label: 'About' },
            { to: '/group', label: 'Groups' },
            { to: '/products', label: 'Products' },
            { to: '/FactoryTour', label: 'Factory Tour' },
          ].map(({ to, label, exact }) => (
<NavLink
  key={to}
  to={to}
  end={exact}
  className={({ isActive }) =>
    `px-4 py-2 text-sm font-medium transition ${
      scrolled
        ? isActive
          ? 'text-sky-500'
          : 'text-gray-800 hover:text-[#009fd1]'
        : isActive
        ? 'text-sky-500'
        : 'text-white hover:text-[#009fd1]'
    }`
  }
>
  {label}
</NavLink>

          ))}

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
              <X className="w-8 h-8 text-[#009fd1]" />
            ) : (
              <Menu className="w-8 h-8 text-[#009fd1]" />
            )}
          </button>

          {/* Mobile Dropdown Menu */}
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
              <NavLink
                to="/FactoryTour"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Factory Tour
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
