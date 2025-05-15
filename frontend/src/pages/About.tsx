import React from "react";
import aboutus_backimg from "../assets/images/image22.jpg";
import { QuoteIcon, Quote } from "lucide-react";
import { Testimonials } from "../constants/testimonials";
import { Link } from "react-router-dom";
import white_purple_ballons from "../assets/images/white-purple-balloons.png";
import vission_image from "../assets/images/image6.jpg";

const About = () => {
  return (
    <div className="w-full h-full">
      <div className="header-background w-full h-[400px] relative overflow-hidden">
        {/* Background Image */}
        <img
          src={aboutus_backimg}
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in">
            What We Do
          </h1>
          <h2 className="text-2xl md:text-4xl font-light animate-fade-in delay-500">
            Who We Are
          </h2>
        </div>
      </div>

      <div className="py-16 space-y-14">
        {/* Mission & Vision Section */}
        <section className="mission-vission-container flex flex-col items-center justify-center">
          <h2
            className="text-4xl font-bold text-center text-[#a38e13]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Mission And Vission
          </h2>
          <div className="mission flex  items-center justify-evenly mx-8 gap-8 mt-8">
            <div className="mv-content text-center">
              <h2 className="text-[#FFD700] text-xl mb-2 font-extrabold">
                OUR MISSION
              </h2>
              <p
                className="mb-4 text-lg font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our mission is to bring our client vision to life by providing
                exceptional events plan and decoration services that exceed
                expectation, ensuring every detail is meticulously executed with
                creativity, professionalism, and a touch of beauty.
              </p>
            </div>
            <div className="mv__image w-full">
              <img
                src={white_purple_ballons}
                alt="white_purple_ballons"
                className="object-cover w-full h-[400px] rounded-lg"
              />
            </div>
          </div>

          {/* Vission */}
          <div className="vission flex items-center justify-evenly mx-8 gap-8 mt-24">
            <div className="mv__image w-full ">
              <img
                src={vission_image}
                alt="room_with_flowers"
                className="object-cover w-full h-[400px] rounded-lg"
              />
            </div>

            <div className="mv-content w-full text-center">
              <h2 className="text-[#FFD700] text-xl mb-2 font-extrabold">
                OUR VISSION
              </h2>
              <p
                className="mb-4 text-lg font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                To create unforgettable experience by transforming spaces into
                captivating and enchanting environments that have a lasting
                impression.
              </p>
            </div>
          </div>
        </section>

        {/* Testimnonial Section */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col items-center justify-center mb-8 gap-3">
            <h1 className="text-4xl font-bold text-center text-[#a38e13]">
              Testimonials
            </h1>
            <p className="text-2xl">
              What our clients have to say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 ">
            {Testimonials.map(({ name, role, message }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#D9D9D9D9] to-[#73737373] rounded-lg p-6 shadow-md relative hover:border-[#a38e13] hover:border-1"
              >
                <QuoteIcon
                  className="text-[#a38e13] absolute top-10 bottom-16 right-1 transform -translate-x-1/2"
                  size={30}
                />
                <h2 className="text-xl font-bold mt-6">{name}</h2>
                <p className="text-gray-700 italic mt-2">{message}</p>
                <p className="text-[#a38e13] font-semibold mt-4">{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
