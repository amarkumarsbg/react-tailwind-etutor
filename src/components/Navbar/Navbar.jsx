import { NavbarMenu } from "../../data/mockData";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>
          {/* Menu section */}

          <dir className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </dir>
          {/* Button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
              Register
            </button>
          </div>
          {/* Mobile Hamburger Menu section */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* mobile sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
