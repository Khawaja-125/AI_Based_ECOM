import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import CartPage from "./Pages/CartPage/CartPage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup"; // Ensure Signup component is imported
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Functions to control modals
  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignupModal = () => setIsSignupOpen(true);
  const closeSignupModal = () => setIsSignupOpen(false);

  return (
    <Router>
      <div className="App">
        <Header
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
        />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path='/register' element={<Signup/>}/> */}
            <Route path='/login' element={<Login/>}/>
            
          </Routes>
        </div>

        <Footer />

        {/* Render Modals when needed */}
        {isLoginOpen && (
          <Login
            closeModal={closeLoginModal}
            openSignupModal={() => {
              closeLoginModal(); // Close login modal first
              openSignupModal(); // Open signup modal
            }}
          />
        )}

        {isSignupOpen && (
          <Signup
            closeModal={closeSignupModal}
            openLoginModal={() => {
              closeSignupModal(); // Close signup modal first
              openLoginModal(); // Open login modal
            }}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
