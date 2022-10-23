import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "React Developer",
          "Learner",
          "Open Source Contributor",
          "Front-End Web Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypewriterEffect;