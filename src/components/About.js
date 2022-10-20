import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="name-header">Indiana Santana</p>
          <p className="position-header">Aspiring Project Manager</p>
          <h1 className="about-header title-font sm:text-6xl text-3xl mb-12 font-medium text-black">
            Hi there!
            <br className="hidden lg:inline-block" />I am a creative and
            team-oriented project manager based in New York, NY.
          </h1>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-black border-2 border-black py-2 px-6 focus:outline-none hover:border-black hover:bg-yellow-200 hover:text-black rounded text-lg"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white border-2 border-black bg-black py-2 px-6 focus:outline-none hover:border-black hover:bg-yellow-200 hover:text-black rounded text-lg"
            >
              Work With Me
            </a>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div> */}
      </div>
    </section>
  );
}
