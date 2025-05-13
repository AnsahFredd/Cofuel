import React, { useEffect, useState } from "react";
import { MoveLeft, MoveRight, QuoteIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Testimonials } from "../constants/testimonials";
import testimoial_image from "../assets/images/testimonial.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % Testimonials.length);
  const previous = () =>
    setCurrent(
      (prev) => (prev - 1 + Testimonials.length) % Testimonials.length
    );

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, []);

  const { name, title, message } = Testimonials[current];

  return (
    <div className="container w-full max-w-5xl mx-auto flex items-center justify-center mb-4 bg-gradient-to-r from-[#D9D9D9D9] to-[#73737373] h-[350px] shadow-lg rounded-lg py-16 px-6 relative">
      <div className="quote text-center max-w-2xl gap-3">
        <QuoteIcon
          size={32}
          strokeWidth={0.2}
          className="quote-icon absolute h-32 w-16 mt-1 left-0 right-0 mx-auto -top-9 text-[#a38e13]"
        />
        <h2
          className="text-2xl mt-16 font-bold mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h2>
        <p
          className="text-gray-700 text-lg font-mono mb-4 break-words whitespace-normal"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {message}
        </p>
        <p
          className="font-semibold text-xl"
          style={{ fontFamily: "Catamaran, sans-serif" }}
        >
          {name}
        </p>
        <Link
          to="/about-us"
          className="testimonial_link text-[#a38e13] text-xl font-semibold"
          style={{ fontFamily: "Catamaran, sans-serif" }}
        >
          View All Testimonials
        </Link>
      </div>

      <button
        className="icon__one absolute left-12 top-1/2 transform -translate-1/2 animate-pulse text-[#a38e13]"
        onClick={previous}
      >
        <MoveLeft className="cursor-pointer" />
      </button>

      <button
        className="icon__two absolute right-12 top-1/2 transform -translate-1/2 animate-pulse text-[#a38e13]"
        onClick={next}
      >
        <MoveRight className="cursor-pointer" />
      </button>
    </div>
  );
};

export default Testimonial;
