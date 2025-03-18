"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/1000014276.jpg"
            alt="Headshot of Maria"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hei!<br /> Jeg er Maria
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Jeg brenner for teknologi og jobber med å utvikle ferdighetene mine til å bli en{" "}
            <span className="font-semibold text-cyan-600">Frontend-utvikler.</span>
          </p>
          <div className="bg-gray-900 p-4 rounded-lg w-full md:w-4/5 shadow-lg">
            <pre className="text-left text-white text-sm md:text-base">
              <code>
                <Typewriter
                  words={[
                    "console.log('Hello, World!');",
                    "print('Hello, World!')",
                    "System.out.println('Hello, World!');",
                    "echo 'Hello, World!';",
                    "fmt.Println(\"Hello, World!\")",
                    "Console.WriteLine(\"Hello, World!\");"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1500}
                  />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
