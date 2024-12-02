import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Login from "../Login/Login";
import Signup from "../Signup/Signup"; // Import Signup component

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSearch = () => setSearchVisible(!searchVisible);
  const toggleSidePanel = () => setSidePanelOpen(!sidePanelOpen);

  const openLoginModal = () => {
    setIsSignupOpen(false); // Close Signup if open
    setIsLoginOpen(true);
  };

  const openSignupModal = () => {
    setIsLoginOpen(false); // Close Login if open
    setIsSignupOpen(true);
  };

  const closeLoginModal = () => setIsLoginOpen(false);
  const closeSignupModal = () => setIsSignupOpen(false);

  return (
    <div>
      <header className="bg-white border-b border-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side - Logo */}
          <div className="text-lg font-bold text-black">
            <NavLink to="/">GentsXclusive</NavLink>
          </div>

          {/* Center - Navbar Links */}
          <nav className="hidden md:flex space-x-8 text-black">
            <NavLink to="/" className="hover:text-gray-600">
              Home
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-600">
              Contact
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-600">
              About
            </NavLink>
          </nav>

          {/* Right Side - Icons and Login/Signup */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button onClick={toggleSearch} className="text-black focus:outline-none">
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button className="text-black focus:outline-none">
              <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <NavLink to="/cart" className="text-black">
              <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
            </NavLink>

            {/* Login Button */}
            <button
              onClick={openLoginModal}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-700"
            >
              Login
            </button>

            {/* Signup Button */}
            <button
              onClick={openSignupModal}
              className="px-4 py-2 text-sm font-medium text-black border border-black rounded-md hover:bg-black hover:text-white"
            >
              Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button onClick={toggleSidePanel} className="text-black focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchVisible && (
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-md"
              style={{ zIndex: 1000 }}
            />
          </div>
        )}
      </header>

      {/* Side Panel for Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-all duration-300 ease-in-out ${
          sidePanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transform: sidePanelOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="absolute top-0 right-0 bg-white w-64 h-full p-4 flex flex-col text-black">
          <button onClick={toggleSidePanel} className="mb-4 self-end focus:outline-none text-black">
            Close
          </button>
          <ul className="space-y-4">
            <li>
              <NavLink to="/" className="hover:text-gray-600" onClick={toggleSidePanel}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-600" onClick={toggleSidePanel}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-600" onClick={toggleSidePanel}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="hover:text-gray-600 flex items-center" onClick={toggleSidePanel}>
                Cart <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
              </NavLink>
            </li>
            <li>
              <button
                onClick={openLoginModal}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-700"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={openSignupModal}
                className="w-full px-4 py-2 text-sm font-medium text-black border border-black rounded-md hover:bg-black hover:text-white"
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Login and Signup Modals */}
      {isLoginOpen && <Login closeModal={closeLoginModal} onSignupClick={openSignupModal} />}
      {isSignupOpen && <Signup closeModal={closeSignupModal} onLoginClick={openLoginModal} />}
    </div>
  );
};

export default Header;
