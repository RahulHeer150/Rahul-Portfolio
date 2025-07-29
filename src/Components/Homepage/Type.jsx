import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter classname='font-serif text-4xl pt-4'
      options={{
        strings: [
          "MERN Stack Developer",
          "Next.js Developer",
          "Frontend Developer",
          "Open Source Contributor",
          "UI/UX Designer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
