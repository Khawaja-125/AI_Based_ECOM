import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">About GentsXclusive</h2>
          <p className="text-sm">
            GentsXclusive offers a premium selection of men's fashion and accessories.
            From stylish clothing to high-quality accessories, we provide products that
            reflect modern style and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="hover:text-gray-400">Cart</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 GentsXclusive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;