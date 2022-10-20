import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black mb-4 md:mb-0 hover:text-yellow-200">
          <a href="#about" className="ml-3 text-xl underline font-extrabold">
            Portfolio
          </a>
        </a>
        <nav className="md:ml-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-black">
          <a href="#projects" className="mr-5 hover:text-yellow-200 ">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-yellow-200 ">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="text-black inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
        >
          Connect
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
