import { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";
import Section1 from "./Section1";
import Section2 from "./Section2";

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
      <Section2 />
      <Section2 />
    </>
  );
}

export default Home;
