import React from "react";
import aboutus_backimg from "../assets/images/image22.jpg";
import { QuoteIcon, Quote } from "lucide-react";
import { Testimonials } from "../constants/testimonials";
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
        <div className="absolute inset-0 bg-black h-[400px] opacity-50 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in">
            What We Do
          </h1>
          <h2 className="text-2xl md:text-4xl font-light animate-fade-in delay-500">
            Who We Are
          </h2>
        </div>
      </div>

      <div className="py-16 space-y-16">
        <div className="max-w-5xl mx-auto space-y-32">
          {/* About Us */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
            <div className="px-4 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-center text-[#a38e13] mb-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                About Us
              </h2>
              <p>
                Cofuel Home of Events is a creative event planning and
                decoration company based in Ghana, dedicated to making every
                celebration unforgettable. With a youthful and passionate
                team,headed by Coffie Samuel Amanor Tettey ( C.E.O / founder),
                we deliver excellence, elegance, and a personal touch in
                everything we do Our goal is not just to plan events but to
                create lasting memories that reflect your unique story. Every
                project we take on supports a bigger dream, thus funding the
                future Cofuel Medical Laboratory Centre. At Cofuel, every
                celebration has a purpose, and we serve to your satisfaction.
              </p>{" "}
            </div>
            <div>
              <img
                src={white_purple_ballons}
                alt="About Us"
                className="w-full rounded-sm"
              />
            </div>
          </div>

          {/* Our Story */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
            <div className="px-4 text-center lg:order-2">
              <h2
                className="text-3xl md:text-4xl font-bold text-center text-[#a38e13] mb-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Story
              </h2>
              <p>
                Cofuel Home of Events began as a simple passion,a young dreamer
                with a love for beauty and creativity. What started with
                decorating my primary school classroom for "Our day" with paper
                cratf then to decorating the basic school assembly hall for
                "carols day celebration" with fabrics quickly grew into
                something greater: a company committed to excellence, culture,
                and lasting memories. With limited resources but an unlimited
                vision, we stepped out in faith turning ideas into real
                experiences and transforming empty spaces into vibrant, joyful
                atmospheres. Every service we offer from planning to décor,
                makeup to catering is inspired by the desire to make people feel
                special and valued. More than just a business, Cofuel is a
                purpose-driven brand with you in mind.
              </p>
            </div>
            <div className="lg:order-1">
              <img
                src={vission_image}
                alt="Our Story"
                className="w-full rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vission */}
        <section
          id="mission-vission"
          className="bg-[#f8f4e3] py-12 px-6 md:px-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#a38e13] mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Mission & Vision
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white/90 backdrop-blur-md border border-[#e0d9b6] p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-[#FFD700] text-xl font-extrabold mb-3">
                Mission
              </h3>
              <p
                className="text-gray-800 text-base font-medium leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Bringing our clients' visions to life through exceptional event
                planning and decoration that exceed expectations. Every detail
                is handled with creativity, care, and elegance.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/90 backdrop-blur-md border border-[#e0d9b6] p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-[#FFD700] text-xl font-extrabold mb-3">
                Vision
              </h3>
              <p
                className="text-gray-800 text-base font-medium leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                To transform ordinary spaces into captivating experiences that
                leave lasting impressions and unforgettable memories.
              </p>
            </div>
          </div>
        </section>

        {/* Testimnonial Section */}
        <section id="all_testimonials" className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col items-center justify-center mb-8 gap-3">
            <h1
              className="text-4xl font-bold text-center text-[#a38e13]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Testimonials
            </h1>
            <p className="text-2xl">
              What our clients have to say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 ">
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

        <div className="px-4 md:px-8 py-10 bg-white rounded-2xl shadow-lg">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#a38e13] mb-6 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Why Choose Cofuel — Home of Events?
          </h2>

          <ul
            className="space-y-4 text-gray-700 text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <li>
              <span className="font-semibold text-[#a38e13]">Creativity</span> —
              We value innovative thinking and strive to bring fresh,
              imaginative ideas to every event we design.
            </li>
            <li>
              <span className="font-semibold text-[#a38e13]">Excellence</span> —
              We are committed to delivering exceptional quality in every aspect
              of our work, ensuring flawless event execution.
            </li>
            <li>
              <span className="font-semibold text-[#a38e13]">
                Collaboration
              </span>{" "}
              — We believe in the power of collaboration, working closely with
              our clients to bring their vision to life.
            </li>
            <li>
              <span className="font-semibold text-[#a38e13]">Integrity</span> —
              We uphold the highest ethical standards, treating our clients,
              partners, and team members with honesty, transparency, and
              respect.
            </li>
            <li>
              <span className="font-semibold text-[#a38e13]">Passion</span> — We
              are passionate about what we do, infusing enthusiasm and
              dedication into every event we plan and decorate.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
