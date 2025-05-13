import flower from "../assets/images/flower.png";
import vission_image from "../assets/images/image6.jpg";
import room_with_flowers from "../assets/images/room-with-flowers.png";
import dinner_table from "../assets/images/contact-backimg.png";
import white_purple_ballons from "../assets/images/white-purple-balloons.png";
import header_image_1 from "../assets/images/image1.jpg";
import header_image_2 from "../assets/images/image13.jpg";
import dinner_setup from "../assets/images/image4.jpg";
import event_styling from "../assets/images/image14.jpg";
import event_planning from "../assets/images/image3.jpg";
import headerImage_3 from "../assets/images/image15.jpg";
import total_decor from "../assets/images/image17.jpg";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import "../styles/Home.css";
import { useEffect, useState } from "react";

const images = [headerImage_3, header_image_2, header_image_1];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(false);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home__container w-full h-full">
      <div className="header-background header-content  w-full h-[642px] relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="background_image_homepage"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onAnimationComplete={() => setShowContent(true)}
            className="w-full h-[642px] object-cover absolute top-0 left-0"
          />
        </AnimatePresence>

        <div className="diamond_icons absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className="diamond_icon w-4 h-4 rotate-45 border border-white"
              animate={{
                backgroundColor: current === index ? "#ffffff" : "transparent",
                scale: current === index ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <>
          <h1
            className="absolute top-[10px] left-0 right-0 bottom-0 flex justify-center items-center text-[100px] text-[#FFD700]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            COFUEL
            <span
              className="absolute top-[300px] right-[450px] text-[100px] bottom-0"
              style={{ fontFamily: "'Luxurious Script', cursive" }}
            >
              Events
            </span>
          </h1>

          <div className="button__container absolute left-0 right-0 bottom-[140px] flex justify-center items-center">
            <Link
              className="button bg-[#111] w-[192px] h-[55px] text-center rounded-sm text-2xl text-white border-0 p-2 hover:bg-[#111111f3] transition-transform duration-300 hover:scale-105 hover:bg-opacity-80"
              to="/contact"
            >
              Start today
            </Link>
          </div>
        </>
      </div>

      <main>
        {/* Event Section */}
        <div className="header flex flex-col items-center justify-center mb-12 mt-12">
          <h2
            className="text-center text-2xl mb-8 font-mono"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Making Your Events An Occasion <br /> To Remember
          </h2>

          <div className="event-img-container grid grid-cols-5 w-full">
            {[
              { src: event_planning, label: "Event Planning" },
              { src: flower, label: "Dowry Wrapping" },
              { src: event_styling, label: "Event Styling" },
              { src: total_decor, label: "Total Decor" },
              { src: dinner_setup, label: "Dinner Set-up" },
            ].map((item, index) => (
              <div
                key={index}
                className="image__container group relative h-[450px] w-full hover:scale-[1.03] cursor-pointer transition-transform duration-300 ease-in-out"
              >
                <img
                  className="h-full w-full object-cover"
                  src={item.src}
                  alt={item.label}
                />

                {/* Overlay that fades on hover of the parent */}
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:backdrop-blur-0"></div>

                <div className="overlap_text absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-[#FFD700] text-[80px] text-center flex flex-col gap-0"
                    style={{ fontFamily: "'Luxurious Script', cursive" }}
                  >
                    {item.label.split(" ").map((word, i) => (
                      <span className="leading-[58px]" key={i}>
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore more button */}
          <Link
            to="/services"
            className="event_btn border text-center rounded-md text-shadow-gray-400 w-[250px] mt-8 p-2.5 font-medium cursor-pointer text-xl focus:ring-2 items-center hover:bg-gray-100  duration-300 hover:scale-110 hover:bg-opacity-80"
            style={{ fontFamily: "'Poppins', serif" }}
          >
            Explore More
          </Link>
        </div>

        {/* YouTube video */}
        <div className="youtube_vid_container flex items-center justify-center mb-24">
          <iframe
            width="760"
            height="435"
            src="https://www.youtube.com/embed/w7x0yh6fkxc?si=q1zRARaD5FlpscLa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Testimonials Section */}
        <Testimonial />

        {/* Brand Identity Section */}
        <div className="core-container w-full h-full mt-36">
          <div className="brand-identity relative">
            <div className="core_values_image w-full h-[450px] relative sm:h-[400px]">
              <img
                src={dinner_table}
                alt="dinner_table"
                className="object-cover w-full h-[450px] sm:h-[400px]"
              />
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>
            <div
              className="core-values absolute ml-56 gap-4 bg-black text-white list-none -top-11 h-[450px] flex flex-col items-center p-9"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <h2 className="text-[#FFD700] text-3xl mb-4">CORE VALUES</h2>
              <li className="text-xl">Creativity</li>
              <li className="text-xl">Excellence</li>
              <li className="text-xl">Collaboration</li>
              <li className="text-xl">Integrity</li>
              <li className="text-xl">Passion</li>
              <span className="mt-2">...Serving you to your satisfaction</span>
              <button className="border-[#fff] w-full border p-2.5 cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-80 hover:bg-[#111111f3]">
                <Link to="/about-us"> About Us</Link>
              </button>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="mission-vission-container flex flex-col items-center justify-center">
            <h2
              className="text-2xl text-center max-w-3xl px-4 mt-16 mb-8 font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in
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
                  expectation, ensuring every detail is meticulously executed
                  with creativity, professionalism, and a touch of beauty.
                </p>
                <Link
                  to="/about-us"
                  className="btn border py-3 px-8 bg-black text-white rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-80 hover:bg-[#111111f3]"
                >
                  About Us
                </Link>
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
                <Link
                  to="/about-us"
                  className="btn border py-3 px-8 bg-black text-white rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-opacity-80 hover:bg-[#111111f3]"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>

          {/* NEWSLETTER Section */}
          <div className="newsletter_container bg-gray-100 flex mt-10 items-center justify-evenly p-24 mb-0">
            <div className="description text-wrap">
              <p className="title">
                Lorem Ipsum is not simply random text. It has <br /> roots in a
                piece of classical
              </p>
              <a href="" className="text-[#777a7b] font-bold text-sm">
                <p>LOREM IPSUM</p>
                <hr className="w-1/3 mt-1 " />
              </a>
            </div>
            <hr className="horizontal_line w-[200px] text-gray-400 rotate-90" />
            <div className="input_container relative w-[300px] mx-auto text-center">
              <h3 className="text-2xl">Newsletter</h3>
              <div className="relative mt-2 mb-1">
                <Mail
                  size={20}
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="border-b w-full  focus:outline-none focus:ring-0 rounded-sm p-1.5 pl-8 relative"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-sm transition-transform duration-300 hover:scale-115 hover:bg-opacity-80"
                  type="submit"
                >
                  <Send />
                </button>
              </div>
              <p>Stay updated with our latest events</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
