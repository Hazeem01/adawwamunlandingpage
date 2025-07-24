import React, { useState } from 'react';
import './NavBar.css'; // We'll create this CSS file

interface NavBarProps {
  logoSrc?: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoSrc = '/src/assets/adawamun.jpg' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Courses', href: '#courses' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logoSrc} alt="Ad-dawaamun Logo" className="logo-image" />
          <span className="logo-text">Ad-dawaamun</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-auth-buttons">
            <button className="btn-signin mobile">Sign In</button>
            <button className="btn-signup mobile">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;