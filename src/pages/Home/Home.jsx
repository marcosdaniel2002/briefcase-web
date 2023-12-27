import { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";
import Section1 from "./Section1";
import Section3 from "./Section3";
import SectionSkills from "./SectionSkills";
import Section2 from "./Section2";

const hardSkills = [
  {
    src: "./Javascript-icon.png",
    skill: "JAVASCRIPT",
    use: "Programming Language",
  },
  {
    src: "./React-icon.svg.png",
    skill: "REACT JS",
    use: "Interface Library",
  },
  {
    src: "./ReactQuery-icon.png",
    skill: "REACT QUERY",
    use: "State Managment",
  },
  {
    src: "./tailwind-css.svg",
    skill: "TAILDWIND",
    use: "Utility Library",
  },
];

const softSkills = [
  {
    src: "./decisiveness.png",
    skill: "DECISIVENESS",
    use: "To make decisions",
  },
  {
    src: "./responsability.png",
    skill: "RESPONSABILITY",
    use: "Control over something",
  },
  {
    src: "./self-motivation.png",
    skill: "SELF MOTIVATION",
    use: "Keep moving forward",
  },
  {
    src: "./problem-solving.png",
    skill: "PROBLEM SOLVING",
    use: "Defining a problem",
  },
];

function Home() {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.5,
    root: null,
  });

  useEffect(
    function () {
      const allSections = document.querySelectorAll(".section--hidden");
      setElements(allSections);
    },
    [setElements]
  );

  useEffect(
    function () {
      const [entry] = entries;
      if (!entry?.isIntersecting) return;
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    },
    [entries, observer]
  );

  return (
    <>
      <Section1 />
      <SectionSkills title="My main skills on develop" skills={hardSkills} />
      <SectionSkills title="Soft skills" skills={softSkills} />
      <Section2 />
      <Section3 />
    </>
  );
}

export default Home;
