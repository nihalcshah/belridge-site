import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong, FaCalendar } from "react-icons/fa6";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative py-24 md:py-36 flex items-center justify-center overflow-hidden bg-[#111111]">
        {/* Background image with opacity */}
        <img
          src="/assets/HeroBackground.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-[36%] pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]"
          style={{ zIndex: 1 }}
        ></div>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
        >
          <div className="text-white text-base md:text-xl font-medium tracking-wide mb-4">
            two founders. eleven years. millions generated.
          </div>
          <h1 className="text-white font-medium text-3xl md:text-5xl leading-normal mb-4">
            we’re entrepreneurs optimizing
            <br className="hidden md:block " /> industry spaces.
          </h1>
          <div className="text-white text-sm italic mb-12 opacity-80">
            We’re Interviewing Professionals to Get a Better Sense of Problem
            Spaces
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://cal.com/nihal-shah-at-kounslr" className="bg-white text-[#111111] font-medium px-6 py-2 rounded-lg flex items-center gap-2 shadow hover:bg-gray-200 hover:cursor-pointer ">
              <FaCalendar /> Talk to us
            </a>
            <a href="#why" className="bg-transparent text-white font-base px-6 py-2 rounded-lg flex items-center gap-2 hover:underline hover:cursor-pointer ">
              Learn More <FaArrowRightLong />
            </a>
          </div>
        </motion.div>
      </div>

      <section id="why" className="w-full bg-[#111111] flex flex-col items-center justify-center py-16 md:py-24 px-4">
        <h2 className="text-white text-3xl md:text-4xl font-medium text-center mb-2">
          Why are we doing this?
        </h2>
        <div className="w-16 h-1 bg-white rounded-full mb-12 mt-2 opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch"
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#111111] border border-gray-400 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center min-w-[260px] max-w-sm mx-auto md:mx-0 hover:bg-[#222222] hover:border-white transition-colors duration-300 cursor-pointer"
            onClick={() => window.location.href = '/about'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-white text-6xl font-normal mb-2">1</div>
            <div className="text-white text-xl font-medium text-center mb-2">
              We’ve seen a gap
            </div>
            <div className="text-white text-base text-center opacity-90 font-normal">
              AI is changing everything – but it’s skipping over major
              industries with workflow overloads and outdated tools.
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#111111] border border-gray-400 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center min-w-[260px] max-w-sm mx-auto md:mx-0 hover:bg-[#222222] hover:border-white transition-colors duration-300 cursor-pointer"
            onClick={() => window.location.href = '/about'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-white text-6xl font-normal mb-2">2</div>
            <div className="text-white text-xl font-medium text-center mb-2">
              We don’t want to build in a vacuum
            </div>
            <div className="text-white text-base text-center opacity-90 font-normal">
              We want to solve problems that real people have, the challenges
              that everyday people face.
            </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#111111] border border-gray-400 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center min-w-[260px] max-w-sm mx-auto md:mx-0 hover:bg-[#222222] hover:border-white transition-colors duration-300 cursor-pointer"
            onClick={() => window.location.href = '/about'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-white text-6xl font-normal mb-2">3</div>
            <div className="text-white text-xl font-medium text-center mb-2">
              We’re curious, not certain
            </div>
            <div className="text-white text-base text-center opacity-90 font-normal">
              We’re running interviews, prototypes, and experiments to “pull”
              from the people.
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Meet the Team Video Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b"
        style={{
          background:
            "linear-gradient(180deg, #111111 0%, #272727 50%, #111111 100%)",
        }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-medium text-center mb-8">
          Meet the Team
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-[#222] max-w-2xl w-full aspect-video flex items-center justify-center">
            <video
              src="/assets/FoundersVideo.mov"
              controls
              className="w-full h-full object-cover bg-black"
              // poster="/assets/FoundersVideoPoster.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </section>
      <section className="w-full flex flex-col items-center justify-center py-8 md:py-16 lg:py-24 px-4 bg-[#111111]">
        <hr className="w-full md:w-1/2 border-t border-gray-400 opacity-40 mb-4 md:mb-8" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center w-full gap-4 md:gap-8 items-center px-4"
        >
          <img
            src="/assets/kounslr.png"
            alt="Kounslr Logo"
            className="h-4 md:h-6 w-auto"
          />
          <img src="/assets/Duke.png" alt="Duke Logo" className="h-6 md:h-10 w-auto" />
          <img src="/assets/VT.png" alt="VT Logo" className="h-4 md:h-6 w-auto" />
          <img src="/assets/Telora.png" alt="Telora Logo" className="h-4 md:h-6 w-auto" />
        </motion.div>
        <hr className="w-full md:w-1/2 border-t border-gray-400 opacity-40 mt-4 md:mt-8" />
      </section>
      {/* Contact Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 bg-[#111111]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto rounded-3xl border border-gray-500 bg-[#181818] px-6 md:px-20 py-16 flex flex-col items-center text-center drop-shadow-lg"
        >
          <h2 className="text-white text-3xl md:text-4xl font-medium mb-6">
            Why talk to us?
          </h2>
          <div className="text-neutral-300 text-lg md:text-xl font-light mb-2">
            We’re a small team of builders from{" "}
            <span className="font-medium">Virginia Tech</span> and{" "}
            <span className="font-medium">Duke</span>.
          </div>
          <div className="text-neutral-300 text-lg md:text-xl font-light mb-2">
            Backed by{" "}
            <a
              href="https://telora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium hover:text-blue-300"
            >
              Telora
            </a>{" "}
            and a few smart early believers
          </div>
          <div className="text-neutral-300 text-lg md:text-xl font-light mb-8">
            Alumni of <span className="font-medium">TJHSST</span>, #1 School in
            the United States
          </div>
          <a
            href="#"
            className="mt-2 bg-white text-[#111111] font-medium px-8 py-2 rounded-xl flex items-center gap-2 shadow hover:bg-gray-200 hover:scale-105 transition-all text-,d md:text-lg"
          >
            Schedule a Quick Interview{" "}
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                />
              </svg>
            </span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
