import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="w-1 h-32 rotate-12 bg-white" />
          <h2 className="text-xl md:text-2xl font-semibold leading-snug">
            Making Your Events <br /> An Occasion To <br /> Remember
          </h2>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-3">
          <Link
            to="/contact"
            className="block text-lg font-medium hover:text-[#FFD700] transition"
          >
            Contact & Inquiry
          </Link>
          <a
            href="mailto:info@eventsite.com"
            className="text-sm hover:text-[#FFD700] transition"
          >
            Email: support@yourevent.com
          </a>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Location: Accra, Ghana</p>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <p className="text-lg font-medium mb-2">Follow Us</p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#FFD700] transition" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="hover:text-[#FFD700] transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-[#FFD700] transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-[#FFD700] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Bottom Info */}
      <hr className="border-t border-gray-700 my-6" />
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-400 space-x-4">
        <span>&copy; {new Date().getFullYear()} CofuelEvents</span>
        <Link to="/terms" className="hover:text-[#FFD700] transition">
          Terms & Conditions
        </Link>
        <Link to="/privacy" className="hover:text-[#FFD700] transition">
          Privacy Policy
        </Link>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
