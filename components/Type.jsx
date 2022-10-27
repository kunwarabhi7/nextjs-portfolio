import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Learner",
          "React Developer",
          'NextJS Devloper',
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypewriterEffect;