import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="bg-blue w-full fixed pt-8 pb-4 pl-4 md:pl-12 lg:pl-24 pr-8 md:pr-12 lg:pr-24">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="/images/logo.svg"
              className="hidden md:block"
              alt="logo"
            />
            <img src="/images/icon.svg" className="md:hidden" alt="logo" />
          </div>
          <div className="hidden lg:flex gap-5">
            <a href="#platform" className="text-light flex items-center gap-1">
              Platform <IoIosArrowDown className="mt-1" />
            </a>
            <a href="#resources" className="text-light flex items-center gap-1">
              Resources <IoIosArrowDown className="mt-1" />
            </a>
            <a href="#pricing" className="text-light">
              Pricing
            </a>
            <a href="#wedges" className="text-light">
              Wedges
            </a>
            <a href="#help" className="text-light">
              Help
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none lg:hidden"
            >
              <RxHamburgerMenu color="white" size={32} />
            </button>

            <a href="#signin" className="hidden lg:block text-light">
              Sign in
            </a>
            <a
              href="#getstarted"
              className="bg-white rounded-full px-3 py-2 flex gap-1 items-center"
            >
              Get started <FaArrowRight color="#121217" />
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`border-t border-t-light-1 mt-7 space-y-4 bg-blue flex flex-col p-5 transform ${ isMenuOpen ? "translate-y-0": "-translate-y-full"} transition-transform duration-500 ease-in-out`}>
            <a href="#platform" className="text-light flex items-center gap-1">
              Platform <IoIosArrowDown className="mt-1" />
            </a>
            <a href="#resources" className="text-light flex items-center gap-1">
              Resources <IoIosArrowDown className="mt-1" />
            </a>
            <a href="#pricing" className="text-light">
              Pricing
            </a>
            <a href="#wedges" className="text-light">
              Wedges
            </a>
            <a href="#help" className="text-light">
              Help
            </a>
            <a href="#signin" className="text-light">
              Sign in
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
