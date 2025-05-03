import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 text-white flex items-center px-6 py-4 w-screen z-[100] shadow-lg">
      {/* Left: Logo */}
      <div className="flex items-center justify-start basis-1/4 sm:min-w-[120px]">
        <img
          src="/assets/brlogo.png"
          alt="Belridge Logo"
          className="h-4 sm:h-6 w-auto"
        />
      </div>

      {/* Center: Title */}
      <div className="text-center text-sm text-nowrap sm:text-wrap sm:text-2xl font-base flex-1 flex justify-center items-center">
        belridge labs
      </div>

      {/* Right: Links */}
      <div className="hidden lg:flex items-center gap-6 justify-end basis-1/4 sm:min-w-[120px]">
        <a href="#" className="text-white hover:underline">
          Home
        </a>
        <a
          href="https://cal.com/nihal-shah-at-kounslr"
          className="bg-white text-black px-4 py-2 rounded-lg shadow flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Book time
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-end basis-1/4 sm:min-w-[120px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-950 shadow-lg z-[99] px-6 py-4">
          <div className="flex flex-col space-y-4 items-center">
            <a href="#" className="text-white hover:underline">
              Home
            </a>
            <a
              href="https://cal.com/nihal-shah-at-kounslr"
              className="bg-white text-black px-4 py-2 rounded-lg shadow flex items-center gap-2 w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book time
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;