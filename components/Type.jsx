import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <div className='md:ml-16'>


    <Typewriter 
      options={{
        strings: [
          "Learner",
          "React Developer",
          'NextJS Developer',
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      />
      </div>
  );
}

export default TypewriterEffect;