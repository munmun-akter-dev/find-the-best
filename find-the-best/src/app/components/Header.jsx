

"use client"; // Add this line at the top of the file


/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import nav_img from "../../../public/images/nav_img.png";
import { navItems } from "../../utils/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <div className="navbar bg-white h-[92px] flex justify-between items-center px-[20px] md:px-[45px] lg:px-0">
          <div className="navbar-start flex items-center">
            <Link href="#">
              <img src={nav_img.src} alt="Logo" />
            </Link>
          </div>

          <div className="navbar-end md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`navbar-center md:flex md:items-center  ${isOpen ? "block" : "hidden"
              } md:block`}
          >
            <div className="hidden lg:block md:block">
              <ul className="menu-horizontal px-1 md:gap-[30px] lg:gap-[62px]  ">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      className="text-[#030712] font-Urbanist text-base md:text-lg font-normal leading-7"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className="navbar-end hidden md:flex">
            <Link
              href="#"
              className="bg-[#F7941D] text-white rounded p-[10px] font-Fraunces text-[16px] font-normal leading-[24px] uppercase"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="bg-white p-4">
            {navItems.map((item) => (
              <li key={item.id} className="mb-2">
                <a
                  href={item.url}
                  className="text-[#030712] font-Urbanist text-base font-normal leading-7"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="#"
                className="bg-[#F7941D] text-white rounded p-[10px] font-Fraunces text-[16px] font-normal leading-[24px] uppercase"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
