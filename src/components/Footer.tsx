import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowRight
} from 'lucide-react';
// import Logo from './Logo';
import logoSHEI from '../components/logo.png'; // Adjust the path if needed
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white inline-block p-2 rounded-md mb-4">
            <div className="flex items-center">
      <img
  src={logoSHEI}
  alt="SHEI Logo"
  className="h-14 w-14.5 object-contain mr-2 rounded-sm"
/></div>
            </div>
            <p className="text-neutral-300 mb-4 text-justify">
              Leading die casting manufacturer in Coimbatore specializing in aluminum, magnesium, and zinc alloy casting, CNC machining, and fabrication.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576335147558" className="text-neutral-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/super_group_of_companies/" className="text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/supergroupscbe/" className="text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@SuperGroupscbe" className="text-neutral-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/group" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Group of Companies
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  High Pressure Die Casting
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  CNC Machining
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Sheet Metal Fabrication
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Surface Finishing
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Tooling Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-secondary-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">
                  123 Industrial Estate, Coimbatore, Tamil Nadu, India - 641049
                </span>
              </li>
              <li className="flex">
                <Phone className="text-secondary-500 mr-3 flex-shrink-0" />
                <a href="tel:+91942909631" className="text-neutral-300 hover:text-white transition-colors">
                  +91 99429 09631
                </a>
              </li>
              <li className="flex">
                <Mail className="text-secondary-500 mr-3 flex-shrink-0" />
                <a href="mailto:mailboxshei@gmail.com" className="text-neutral-300 hover:text-white transition-colors">
                mailboxshei@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-neutral-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sudharsan Heavy Engineering Industry. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="/about" className="hover:text-white mr-4">Privacy Policy</a>
            <a href="/about" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;