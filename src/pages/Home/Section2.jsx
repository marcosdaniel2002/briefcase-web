import styled, { css } from "styled-components";
import SkillCard from "../../ui/SkillCard";

const skills = [
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

const Section = styled.section`
  text-align: center;
  padding: 8rem 0;
  transition: background-color 0.3s, border 0.3s, transform 1s, opacity 1s;

  & h2 {
    margin: 5rem 0;
  }
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

function Section2() {
  return (
    <Section className={"section--hidden"}>
      <h2>My main skills on develop</h2>
      <Skills>
        {skills.map((skill, i) => (
          <SkillCard
            num={i + 1}
            src={skill.src}
            skill={skill.skill}
            use={skill.use}
            key={i}
          />
        ))}
      </Skills>
    </Section>
  );
}

export default Section2;
