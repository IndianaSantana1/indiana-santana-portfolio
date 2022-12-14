import { BookOpenIcon } from "@heroicons/react/solid";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <BookOpenIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-5xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Certifications
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="border-2 border-black rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="skill-icon w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-black">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
