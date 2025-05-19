import React, { useEffect, useState } from "react";
import { MoveLeft, MoveRight, QuoteIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Testimonials } from "../constants/testimonials";
import "./Testimonial.css";

const Testimonial = () => {
  const displayedTestimonials = Testimonials.slice(0, 3); // ✅ only first 3
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = displayedTestimonials.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);

  const previous = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 10000); // ⏱ auto-rotate every 10s
    return () => clearInterval(timer);
  }, []);

  const testimonial = displayedTestimonials[currentIndex];

  return (
    <div className="testimonial_container w-full max-w-5xl mx-auto my-12 px-4">
      <div className="quote bg-[#d9d9d9] relative rounded-2xl shadow-md py-10 px-6 text-center">
        <QuoteIcon size={40} className="text-[#a38e13] mb-4 mx-auto" />
        <h1
          className="text-2xl mb-1"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          What Our Clients Are Saying
        </h1>
        <h3
          className="text-lg"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {testimonial.name}
        </h3>
        <p
          className="message text-gray-700 mt-4 text-base leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {testimonial.message}
        </p>
        <p
          className="role mt-4"
          style={{ fontFamily: "'Catamaran', sans-serif" }}
        >
          {testimonial.role}
        </p>
        <Link
          to="/about-us#all_testimonials"
          className="testimonial_link block mt-2 text-[#a38e13]"
          style={{ fontFamily: "'Catamaran', sans-serif" }}
        >
          View All Testimonials
        </Link>

        {/* Arrows */}
        <button
          className=" absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a38e13]"
          onClick={previous}
        >
          <MoveLeft className="icon__one" />
        </button>
        <button
          className=" absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a38e13]"
          onClick={next}
        >
          <MoveRight className="icon__two" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
