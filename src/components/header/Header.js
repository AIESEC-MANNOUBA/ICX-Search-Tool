import React, { useState } from "react";
import "./header.css";
import traveller from "../../assets/travller.png"; // Ensure traveller.png is in the correct folder.
import Logo from "../../assets/aiesecl.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="AIESEC logo" />
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-menu ${menuOpen ? "responsive" : ""}`}>
          <li><a href="#about">About ICX</a></li>
          <li><a href="#opportunities">Opportunities</a></li>
          <li><a href="#application-process">Application Process</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1>
            <span className="highlight " >MEDINA'S ICX SEARCH TOOL</span>
            <br />
            Discover, <span className="underline" >enjoy</span>, and live the impact
          </h1>
          <p>
            This platform will help you explore our exchange opportunities, learn about the application process, and discover the Tunisian cultural aspects, all in one place.
          </p>
          <div className="cta-buttons">
            <button className="btn contact-us">Contact Us</button>
            <button className="btn learn-more">lenna ml mafrouth Nhotou vid taa eps f sif</button>
          </div>
        </div>
        <div className="image-content">
          <img src={traveller} alt="Traveller" />
        </div>
      </div>
    </header>
  );
};

export default Header;
