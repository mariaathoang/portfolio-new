"use client";

import React, { useState, useEffect, useRef} from "react"

const skills = [
  { skill: "HTML", color: "bg-[#E34F26]" },
  { skill: "CSS", color: "bg-[#1572B6]" },
  { skill: "JavaScript", color: "bg-[#F7DF1E]" },
  { skill: "TypeScript", color: "bg-[#3178C6]" },
  { skill: "Tailwind CSS", color: "bg-[#38BDF8]" },
  { skill: "Next.js", color: "bg-[#000000]" },
  { skill: "React", color: "bg-[#61DAFB]" },
  { skill: "Python", color: "bg-[#3776AB]" },
  { skill: "Java", color: "bg-[#007396]" },
  { skill: "C#", color: "bg-[#9B4993]" },
  { skill: "PHP", color: "bg-[#777BB4]" },
  { skill: "Golang", color: "bg-[#00ADD8]" },
  { skill: ".NET", color: "bg-[#512BD4]" },
  { skill: "MySQL", color: "bg-[#4479A1]" },
  { skill: "MariaDB", color: "bg-[#003545]" },
  { skill: "Git", color: "bg-[#F05032]" },
  { skill: "Docker", color: "bg-[#2496ED]" },
  { skill: "Figma", color: "bg-[#F24E1E]" },
];

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement| null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
        { threshold: 0.1}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000); // Interval time
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="about" ref={sectionRef} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    }}>
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Om meg
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Bli kjent med meg!
            </h1>
            <p>
              Hei! Jeg heter Maria, jeg er 20 år og er en {" "}
              <span className="font-bold">{"nysjerrig"}</span>,
              <span className="font-bold">{" lidenskapelig"}</span>, og
              <span className="font-bold">{" ambisiøs"}</span> utvikler fra Oslo.
            </p>
            <br />
            <p>
              Jeg er tredjeårs student i bachelorstudiet IT og
              Informasjonssystemer ved Universitetet i Agder, og har planer om å
              ta master innen informatikk ved Universitetet i Oslo.
            </p>
            <br />
            <p>
              I mitt fjerde semester dro jeg på utveksling til Sør-Korea hvor jeg
              studerte ved Hallym Universitet. Under oppholdet har jeg fått nye 
              perspektiver, samt kunnskap, nettverk og erfaring. 
            </p>
            <br />
            <p>
              Jeg tror på at {" "}
              <span className="font-bold text-cyan-500">
                det er alltid en mulighet for å lære
              </span>{" "}
              som er derfor jeg alltid er villig til å lære noe nytt, og utvide min
              egen kunnskap for å forbedre mine ferdigheter.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Ferdigheter</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                const isHighlighted = idx === highlightedIndex;
                return (
                  <p
                    key={idx}
                    className={`px-4 py-2 mr-2 mt-2 rounded font-semibold transform transition-transform duration-300 
    ${isHighlighted ? `text-white ${item.color} scale-105` : "bg-gray-200 text-gray-500"}`}
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
