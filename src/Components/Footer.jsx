import React from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-around gap-12 md:gap-6">
        <div className="md:max-w-[300px]">
          <h2 className="text-2xl font-bold mb-4">HERO.IO</h2>
          <p className="text-gray-400 text-sm">
            At HERO.IO, we are passionate about creating innovative applications
            that transform everyday life into a more seamless, intelligent, and
            engaging experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="text-gray-400 text-sm flex flex-col gap-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Contact Sales</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <ul className="text-gray-400 text-sm flex flex-col gap-3">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaXTwitter /> @Hero.IO
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaLinkedin /> @Hero.IO
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaFacebook /> @Hero.IO
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <IoMailOutline /> admin@hero.io
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 opacity-50 my-8"></div>
      <p className="text-center text-gray-400 text-sm">
        © 2025 Hero.Io | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
