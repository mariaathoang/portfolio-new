import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Sequence Game",
    description:
      "A simple sequence game.",
    image: "/sequence-game.png",
    github: "https://github.com/mariaathoang/sequence-game",
    link: "https://mariaathoang.github.io/sequence-game/",
  },
  {
    name: "Weather App",
    description:
      "What's the weather like today? (With icons designed by me).",
    image: "/weather-app.png",
    github: "https://github.com/mariaathoang/weather-app",
    link: "https://mariaathoang.github.io/weather-app/",
  },
  {
    name: "E-Commerce (WIP)",
    description:
      "An online ice cream store containing a variety of Korean ice creams inspired by my exchange in Korea.",
    image: "/e-commerce.png",
    github: "https://github.com/mariaathoang/ecommerce-app",
    link: "https://github.com/mariaathoang/ecommerce-app",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Prosjekter
        <hr className="w-6 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
