import React, { useState, useRef, useEffect } from "react";
import contact_backimag from "../assets/images/contact-backimg.png";
import { FaDesktop, FaPhoneAlt } from "react-icons/fa";
import { MapPin } from "lucide-react";
import Form from "../components/Form";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact-container w-full h-full">
      <div className="header-background backimg_container w-full h-[450px] relative">
        <img
          src={contact_backimag}
          alt="contact_background_image"
          className="object-cover w-full h-[450px]"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 backdrop-blur-sm z-0"></div>
        <div className="contact-header-text absolute left-0 right-0 top-35 bottom-0 flex flex-col justify-self-center items-center z-10 text-white">
          <h1 className="text-4xl  font-mono mb-2">Contact Information</h1>
          <p className="text-2xl">Get in touch with us</p>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="contact-info flex items-center justify-evenly w-full h-full">
          <div className="flex flex-col items-center justify-center my-5 space-y-2">
            <MapPin className="text-[#FFD700]" size={30} />
            <p>American House</p>
            <p>KNUST, Ghana</p>
          </div>
          <div className="flex flex-col items-center justify-center my-5 space-y-2">
            <FaPhoneAlt size={30} className="text-[#FFD700]" />
            <p>
              <strong>Telephone:</strong>+233 353 345 274
            </p>
            <p>
              <strong>Telephone:</strong>+233 353 345 274
            </p>
          </div>
          <div className="flex flex-col items-center justify-center my-5 space-y-2">
            <FaDesktop size={30} className="text-[#FFD700]" />
            <p>
              Email:{" "}
              <a href="mailto:example@gmail.com" className="text-[#ae9507]">
                example@gmail.com
              </a>{" "}
              <br />& include details about your day
            </p>
          </div>
        </div>

        <div className="contact flex flex-col justify-center items-center text-center space-y-2 p-4">
          <h1 className="text-3xl font-bold">Book Us</h1>
          <p className="max-w-prose">
            We're excited to connect with you! To begin, please fill out the
            form bellow, and we will be in touch with 48 hours to start your
            booking progress. We look forward to helping you plan your special
            event!
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
