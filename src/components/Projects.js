import { CodeIcon, PuzzleIcon } from "@heroicons/react/solid";
import React from "react";
import {
  PlantPalProjects,
  SauceAndSpoonProjects,
  VirtualVerdeProjects,
} from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-black-800 body-font">
      <div className="px-5 py-10 mx-auto text-center lg:px-20">
        <div className="flex flex-col w-full mb-5">
          <PuzzleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-black">
            Projects
          </h1>
          <p className="text-xl leading-relaxed xl:w-4/5 mx-auto mb-4">
            Visit my{" "}
            <a
              className="font-bold underline"
              href="https://drive.google.com/drive/folders/1-4Qr3ARAY9Chxq4Ha29DR_EOfmgj3xNx?usp=share_link"
              target="_blank"
            >
              Project Management Portfolio
            </a>{" "}
            for additional projects.
          </p>
        </div>
        <div className="project-container">
          <p
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1MIAO2074KC_w1aj-C-PEJR7arC3o0BRi?usp=sharing",
                "_blank"
              );
            }}
            className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black hover:pointer project-title-link"
          >
            Plant Pals
          </p>
          <div className="flex flex-wrap -m-4">
            {PlantPalProjects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4 project-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex relative border-2 border-black project-section">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-left project-img"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-black opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium mb-3 project-header">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-white">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="project-container">
          <p
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1-4Qr3ARAY9Chxq4Ha29DR_EOfmgj3xNx?usp=sharing",
                "_blank"
              );
            }}
            className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black hover:pointer project-title-link"
          >
            Virtual Verde
          </p>
          <div className="flex flex-wrap -m-4">
            {VirtualVerdeProjects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4 project-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex relative border-2 border-black project-section">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-left project-img"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-black opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium mb-3 project-header">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-white">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="project-container">
          <p
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1--GO-g1gptZacH8XwRvP4oXUW1D3QfXg?usp=sharing",
                "_blank"
              );
            }}
            className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black hover:pointer project-title-link"
          >
            Sauce and Spoon
          </p>
          <div className="flex flex-wrap -m-4">
            {SauceAndSpoonProjects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4 project-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex relative border-2 border-black project-section">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-left project-img"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-black opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium mb-3 project-header">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-white">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
