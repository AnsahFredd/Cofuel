import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";

interface NavBarProps {
  backgroundColor: string;
}

const NavBar: React.FC<NavBarProps> = ({ backgroundColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerBackground = document.querySelector(".header-background");
      if (headerBackground) {
        const headerHeight = headerBackground.getBoundingClientRect().height;
        setHasScrolled(window.scrollY >= headerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Choosing background color based on prop or scroll

  const computedClasses = backgroundColor
    ? "backdrop-blur-sm border-b border-neutral-700/80"
    : hasScrolled
    ? "bg-[#000000] backdrop-blur-sm border-b border-neutral-700/80"
    : "bg-transparent";

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 p-4 transition-all duration-300 ${computedClasses}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <nav className="flex items-center justify-between mx-4 md:mx-8 lg:mx-16 relative">
        <div className="flex items-center mr-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
            src={logo}
            alt="logo image"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FFD700] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop/Tablet Menu */}
        <ul
          className="hidden md:flex text-white gap-8 lg:gap-16"
          style={{ fontFamily: "Catamaran, sans-serif" }}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about-us">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">OUR SERVICES</Link>
          </li>
          <li>
            <Link to="/portfolio_gallery">PORTFOLIO</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full w-full bg-[#111] p-4 md:hidden z-50 backdrop-blur-sm border-b border-neutral-700/80">
            <ul
              className="text-white flex flex-col gap-4"
              style={{ fontFamily: "Catamaran, sans-serif" }}
            >
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about-us">ABOUT</Link>
              </li>
              <li>
                <Link to="/services">OUR SERVICES</Link>
              </li>
              <li>
                <Link to="/portfolio_gallery">PORTFOLIO</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt color="#FFD700" className="h-4 w-4" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden md:flex items-center justify-center gap-2">
          <FaPhoneAlt color="#FFD700" className="h-4 w-4" />
          <Link className="text-white text-lg lg:text-xl" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
